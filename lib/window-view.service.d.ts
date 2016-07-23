import { Type, DynamicComponentLoader, ViewContainerRef, ComponentRef, ResolvedReflectiveProvider } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { WindowViewHasResult } from './window-view-has-result';
export declare class WindowViewService {
    private dcl;
    private stack;
    private outlet;
    private _length$;
    private _onOpen$;
    private _onClose$;
    /**
     * Current window's count.
     */
    length$: Observable<number>;
    /**
     * Emit after window open.
     */
    onOpen$: Observable<ComponentRef<any>>;
    /**
     * Emit before window close.
     */
    onClose$: Observable<ComponentRef<any>>;
    constructor(dcl: DynamicComponentLoader);
    setOutlet(outlet: ViewContainerRef): void;
    /**
     * Add window to top.
     */
    pushWindow(Component: Type, providers?: ResolvedReflectiveProvider[]): Promise<ComponentRef<any>>;
    /**
     * Open window and wait for result.
     */
    pushWindowAndGetResult<T>(Component: WindowViewHasResult<T>, providers?: ResolvedReflectiveProvider[]): Promise<Observable<T>>;
    /**
     * Remove latest window.
     */
    popWindow(): boolean;
    private canCloseWindowView(componentRef);
}
