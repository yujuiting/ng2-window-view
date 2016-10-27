import { Injectable,
         Type,
         ComponentFactoryResolver,
         ViewContainerRef,
         ComponentRef,
         ComponentFactory,
         Compiler,
         Injector,
         NgModule,
         Provider,
         ModuleWithProviders } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { WindowViewCanClose } from './window-view-can-close';
import { WindowViewHasResult } from './window-view-has-result';

@Injectable()
export class WindowViewService {

  private cachedComponentFactory: Map<Type<any>, ComponentFactory<any>> = new Map();

  private stack: ComponentRef<any>[] = [];

  private outlet: ViewContainerRef;

  private _length$: Subject<number> = new Subject<number>();

  private _open$: Subject<any> = new Subject<any>();

  private _close$: Subject<any> = new Subject<any>();

  get length(): number { return this.stack.length; }

  /**
   * Current window's count.
   */
  get length$(): Observable<number> { return this._length$.asObservable(); }

  /**
   * Emit after window open.
   */
  get open$(): Observable<any> { return this._open$.asObservable(); }

  /**
   * Emit before window close.
   */
  get close$(): Observable<any> { return this._close$.asObservable(); }

  constructor(private cfr: ComponentFactoryResolver,
              private compiler: Compiler,
              private injector: Injector) {}

  setOutlet(outlet: ViewContainerRef): void {
    if (!!this.outlet) {
      throw new Error('[WindowViewService] setOutlet error. Multiple window-view-outlet');
    }

    this.outlet = outlet;
  }

  getInstanceAt(index: number): any {
    return (this.stack[index]) ? this.stack[index].instance : null;
  }

  add(componentRef: ComponentRef<any>): void {
    this.stack.push(componentRef);
    this._open$.next(componentRef.instance);
    this._length$.next(this.stack.length);
  }

  remove(componentRef: ComponentRef<any>): boolean {
    if (!this.canCloseWindowView(componentRef)) {
      return false;
    }
    let index: number = this.stack.indexOf(componentRef);
    this.stack.splice(index, 1);
    this._close$.next(componentRef.instance);
    this._length$.next(this.stack.length);
    componentRef.destroy();
    return true;
  }

  removeByInstance<T>(instance: T): boolean {
    let removedComponentRef: ComponentRef<T> = this.stack.find((componentRef: ComponentRef<any>) =>
      componentRef.instance === instance);
    return this.remove(removedComponentRef);
  }

  /**
   * Add window to top.
   * 
   * The component type have to registry on entryComponents of module.
   * Or provide component factory directly.
   */
  pushWindow<T>(componentType: Type<T> | ComponentFactory<T>): T {
    if (!this.outlet) {
      throw new Error('[WindowViewService] pushWindow error. Not found window-view-outlet');
    }

    let factory: ComponentFactory<T>;
    if (componentType instanceof ComponentFactory) {
      factory = componentType;
    } else {
      factory = this.cfr.resolveComponentFactory(componentType);
    }
    let componentRef = this.outlet.createComponent(factory);
    this.add(componentRef);
    return componentRef.instance;
  }

  /**
   * Compile module and get component factory from it and do push window.
   * 
   * About third parameter `cached`.
   * In usual case, module has been cached by angular, you don't need to concern about it.
   * But, if module is created on the fly, angular can't not cached it and always compile everytime.
   * In addition to this, repeatly creating module on the fly with declare same component is invalid,
   * resolving those problem by caching component factory.
   */
  pushDynamicWindow<T, U>(moduleType: Type<U>, componentType: Type<T>, cached = false): Promise<T> {
    if (cached && this.cachedComponentFactory.has(componentType)) {
      return Promise.resolve().then(() => this.pushWindow(this.cachedComponentFactory.get(componentType)));
    }

    return this.compiler.compileModuleAsync(moduleType).then( moduleFactory => {
      let moduleRef = moduleFactory.create(this.injector);
      let componentFactory = moduleRef
                             .componentFactoryResolver
                             .resolveComponentFactory(componentType);
      if (cached) {
        this.cachedComponentFactory.set(componentType, componentFactory);
      }
      return this.pushWindow(componentFactory);
    });
  }

  /**
   * 
   */
  pushUnwrapDynamicWindow<T>(componentType: Type<T>,
                             options: {
                               id?: string,
                               declarations?: Array<Type<any> | any[]>,
                               imports?: Array<Type<any> | ModuleWithProviders | any[]>,
                               providers?: Provider[]
                             } = {}): Promise<T> {
    let moduleMetadataParams = {
      id: options.id,
      declarations: options.declarations || [],
      entryComponents: [componentType],
      imports: options.imports || [],
      providers: options.providers
    };

    if (moduleMetadataParams.declarations.indexOf(componentType) < 0) {
      moduleMetadataParams.declarations.push(componentType);
    }

    let WindowViewModule = require('./window-view.module').WindowViewModule;

    if (moduleMetadataParams.imports.indexOf(WindowViewModule) < 0) {
      moduleMetadataParams.imports.push(WindowViewModule);
    }

    let moduleMetadata = NgModule(moduleMetadataParams);
    let moduleType = moduleMetadata(class {});
    return this.pushDynamicWindow(moduleType, componentType, true);
  }

  /**
   * Remove latest window.
   */
  popWindow(): boolean {
    if (this.stack.length === 0) {
      return false;
    }
    let componentRef: ComponentRef<any> = this.stack[this.stack.length - 1];
    return this.remove(componentRef);
  }

  clearCache(): void {
    this.cachedComponentFactory.clear();
  }

  private canCloseWindowView(componentRef: ComponentRef<WindowViewCanClose>) {
    if (typeof componentRef.instance.windowViewCanClose !== 'function') {
      return true;
    }
    return componentRef.instance.windowViewCanClose();
  }

}
