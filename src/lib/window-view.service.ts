import { Injectable, Type, Injector,
         DynamicComponentLoader, ViewContainerRef, ComponentRef,
         ResolvedReflectiveProvider } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { WindowViewCanClose } from './window-view-can-close';

@Injectable()
export class WindowViewService {

  private stack: ComponentRef<any>[] = [];

  private outlet: ViewContainerRef;

  private _length$: Subject<number> = new Subject<number>();

  private _onOpen$: Subject<ComponentRef<any>> = new Subject<ComponentRef<any>>();

  private _onClose$: Subject<ComponentRef<any>> = new Subject<ComponentRef<any>>();

  get length$(): Observable<number> { return this._length$.asObservable(); }

  get onOpen$(): Observable<ComponentRef<any>> { return this._onOpen$.asObservable(); }

  get onClose$(): Observable<ComponentRef<any>> { return this._onClose$.asObservable(); }

  constructor(private dcl: DynamicComponentLoader) {}

  setOutlet(outlet: ViewContainerRef) {
    this.outlet = outlet;
  }

  pushWindow(Component: Type, providers: ResolvedReflectiveProvider[] = []): Promise<ComponentRef<any>> {
    return this.dcl.loadNextToLocation(Component, this.outlet, providers)
      .then((componentRef: ComponentRef<any>) => {
        this.stack.push(componentRef);
        this._onOpen$.next(componentRef);
        this._length$.next(this.stack.length);
        return componentRef;
      });
  }

  popWindow(): boolean {
    if (this.stack.length === 0) {
      return false;
    }
    let componentRef: ComponentRef<any> = this.stack.pop();
    if (!this.canCloseWindowView(componentRef)) {
      this.stack.push(componentRef);
      return false;
    }
    this._onClose$.next(componentRef);
    this._length$.next(this.stack.length);
    componentRef.destroy();
    return true;
  }

  canCloseWindowView(componentRef: ComponentRef<WindowViewCanClose>) {
    if (typeof componentRef.instance.windowViewCanClose != 'function') {
      return true;
    }
    return componentRef.instance.windowViewCanClose();
  }

}
