import { Type, ComponentFactoryResolver, ViewContainerRef, ComponentRef, ComponentFactory, Compiler, Injector, Provider, ModuleWithProviders } from '@angular/core';
import { Observable } from 'rxjs/Observable';
export declare class WindowViewService {
    private cfr;
    private compiler;
    private injector;
    private cachedComponentFactories;
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
    constructor(cfr: ComponentFactoryResolver, compiler: Compiler, injector: Injector);
    setOutlet(outlet: ViewContainerRef): void;
    getInstanceAt(index: number): any;
    add(componentRef: ComponentRef<any>): void;
    remove(componentRef: ComponentRef<any>): boolean;
    removeByInstance<T>(instance: T): boolean;
    /**
     * Add window to top.
     *
     * The component type have to registry on entryComponents of module.
     * Or provide component factory directly.
     */
    pushWindow<T>(componentType: Type<T> | ComponentFactory<T>, useCache?: boolean): T;
    /**
     * Compile module and get component factory from it and do push window.
     *
     * About third parameter `cached`.
     * In usual case, module has been cached by angular, you don't need to concern about it.
     * But, if module is created on the fly, angular can't not cached it and always compile everytime.
     * In addition to this, repeatly creating module on the fly with declare same component is invalid,
     * resolving those problem by caching component factory.
     */
    pushDynamicWindow<T, U>(moduleType: Type<U>, componentType: Type<T>, cached?: boolean): Promise<T>;
    /**
     *
     */
    pushBareDynamicWindow<T>(componentType: Type<T>, options?: {
        id?: string;
        declarations?: Array<Type<any> | any[]>;
        imports?: Array<Type<any> | ModuleWithProviders | any[]>;
        providers?: Provider[];
    }): Promise<T>;
    /**
     * Remove latest window.
     */
    popWindow(): boolean;
    clearCache(): void;
    private canCloseWindowView(componentRef);
}
