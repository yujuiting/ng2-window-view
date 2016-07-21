import { Injectable, Type, Injector,
         DynamicComponentLoader, ViewContainerRef, ComponentRef,
         ResolvedReflectiveProvider } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';


interface WindowView {
  Component: Type;
  componentRef: ComponentRef<any>;
}

@Injectable()
export class WindowViewService {

  private stack: WindowView[] = [];

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
        let windowView: WindowView = { Component, componentRef };
        this.stack.push(windowView);
        this._onOpen$.next(componentRef);
        this._length$.next(this.stack.length);
        return componentRef;
      });
  }

  popWindow() {
    let windowView: WindowView = this.stack.pop();
    this._onClose$.next(windowView.componentRef);
    windowView.componentRef.destroy();
    this._length$.next(this.stack.length);
  }

}
