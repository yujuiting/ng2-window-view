export declare class WindowViewLayerService {
    /**
     * Order index is same as z-index.
     */
    private windowViewContainers;
    /**
     * Z-Index of controled window view container will
     * always start at it.
     */
    zIndexStartAt: number;
    add(windowViewContainer: any): void;
    remove(windowViewContainer: any): void;
    bringToTop(windowViewContainer: any): void;
    private _add(windowViewContainer);
    private _remove(windowViewContainer);
    private setAllWindowViewContainersZIndex();
}
