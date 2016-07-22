import { Type, DynamicComponentLoader, ViewContainerRef, ComponentRef, ResolvedReflectiveProvider } from '@angular/core';
import { Observable } from 'rxjs/Observable';
export declare class WindowViewService {
    private dcl;
    private stack;
    private outlet;
    private _length$;
    private _onOpen$;
    private _onClose$;
    length$: Observable<number>;
    onOpen$: Observable<ComponentRef<any>>;
    onClose$: Observable<ComponentRef<any>>;
    constructor(dcl: DynamicComponentLoader);
    setOutlet(outlet: ViewContainerRef): void;
    pushWindow(Component: Type, providers?: ResolvedReflectiveProvider[]): Promise<ComponentRef<any>>;
    popWindow(): void;
}
