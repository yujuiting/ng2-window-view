import { WindowViewContainerComponent } from './window-view-container/window-view-container.component';
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
    add(windowViewContainer: WindowViewContainerComponent): void;
    remove(windowViewContainer: WindowViewContainerComponent): void;
    bringToTop(windowViewContainer: WindowViewContainerComponent): void;
    private _add(windowViewContainer);
    private _remove(windowViewContainer);
    private setAllWindowViewContainersZIndex();
}
