import { Injectable, Type, Injector,
         DynamicComponentLoader, ViewContainerRef, ComponentRef,
         ResolvedReflectiveProvider } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { WindowViewCanClose } from './window-view-can-close';
import { WindowViewHasResult } from './window-view-has-result';

@Injectable()
export class WindowViewService {

  private stack: ComponentRef<any>[] = [];

  private outlet: ViewContainerRef;

  private _length$: Subject<number> = new Subject<number>();

  private _onOpen$: Subject<ComponentRef<any>> = new Subject<ComponentRef<any>>();

  private _onClose$: Subject<ComponentRef<any>> = new Subject<ComponentRef<any>>();

  get length(): number { return this.stack.length; }

  /**
   * Current window's count.
   */
  get length$(): Observable<number> { return this._length$.asObservable(); }

  /**
   * Emit after window open.
   */
  get onOpen$(): Observable<ComponentRef<any>> { return this._onOpen$.asObservable(); }

  /**
   * Emit before window close.
   */
  get onClose$(): Observable<ComponentRef<any>> { return this._onClose$.asObservable(); }

  constructor(private dcl: DynamicComponentLoader) {}

  setOutlet(outlet: ViewContainerRef) {
    this.outlet = outlet;
  }

  getWindowInstanceAt(index: number) {
    return (this.stack[index]) ? this.stack[index].instance : null;
  }

  /**
   * Add window to top.
   */
  pushWindow(Component: Type, providers: ResolvedReflectiveProvider[] = []): Promise<ComponentRef<any>> {
    if (!this.outlet) {
      throw new Error('[WindowViewService] pushWindow error. Not found window-view-outlet');
    }
    return this.dcl.loadNextToLocation(Component, this.outlet, providers)
      .then((componentRef: ComponentRef<any>) => {
        this.stack.push(componentRef);
        this._onOpen$.next(componentRef);
        this._length$.next(this.stack.length);
        return componentRef;
      });
  }

  /**
   * Open window and wait for result.
   */
  pushWindowAndGetResult<T>(Component: WindowViewHasResult<T>, providers: ResolvedReflectiveProvider[] = []): Promise<Observable<T>> {
    return this.pushWindow(Component as any, providers).then((componentRef: ComponentRef<WindowViewHasResult<T>>) => {
      let component: WindowViewHasResult<T> = componentRef.instance;
      if (!component.preventAutoCloseWindow) {
        let waitForResult: Subscription = component.result$.subscribe(null, null, () => {
          this.popWindow();
          waitForResult.unsubscribe();
        });
      }
      return component.result$;
    });
  }

  /**
   * Remove latest window.
   */
  popWindow(): boolean {
    if (this.stack.length === 0) {
      return false;
    }
    let componentRef: ComponentRef<any> = this.stack[this.stack.length - 1];
    return this.removeWindow(componentRef);
  }

  removeWindow(componentRef: ComponentRef<any>): boolean {
    if (!this.canCloseWindowView(componentRef)) {
      return false;
    }
    let index: number = this.stack.indexOf(componentRef);
    this.stack.splice(index, 1);
    this._onClose$.next(componentRef);
    this._length$.next(this.stack.length);
    componentRef.destroy();
    return true;
  }

  removeWindowByInstance(instance: any) {
    let removedComponentRef: ComponentRef<any> = this.stack.find((componentRef: ComponentRef<any>) =>
      componentRef.instance === instance);
    return this.removeWindow(removedComponentRef);
  }

  private canCloseWindowView(componentRef: ComponentRef<WindowViewCanClose>) {
    if (typeof componentRef.instance.windowViewCanClose !== 'function') {
      return true;
    }
    return componentRef.instance.windowViewCanClose();
  }

}
