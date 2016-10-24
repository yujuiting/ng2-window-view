import { Type, ComponentFactoryResolver, ViewContainerRef, ComponentRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
export declare class WindowViewService {
    private cfr;
    private stack;
    private outlet;
    private _length$;
    private _open$;
    private _close$;
    readonly length: number;
    /**
     * Current window's count.
     */
    readonly length$: Observable<number>;
    /**
     * Emit after window open.
     */
    readonly open$: Observable<any>;
    /**
     * Emit before window close.
     */
    readonly close$: Observable<any>;
    constructor(cfr: ComponentFactoryResolver);
    setOutlet(outlet: ViewContainerRef): void;
    getInstanceAt(index: number): any;
    add(componentRef: ComponentRef<any>): void;
    remove(componentRef: ComponentRef<any>): boolean;
    removeByInstance<T>(instance: T): boolean;
    /**
     * Add window to top.
     */
    pushWindow<T>(Component: Type<T>): T;
    /**
     * Remove latest window.
     */
    popWindow(): boolean;
    private canCloseWindowView(componentRef);
}
