import { EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { WindowViewService } from '../window-view.service';
import { WindowViewLayerService } from '../window-view-layer.service';
export declare class WindowViewContainerComponent implements OnInit, OnDestroy {
    private windowView;
    private windowViewLayer;
    /**
     * Window title.
     *
     * Default: 'Untitled Window'
     */
    heading: string;
    /**
     * Possible option:
     *  small, alias 's'
     *  middle, alias 'm'
     *  large, alias 'l'
     *  relative-small, alias 'rs'
     *  relative-middle, alias 'rm'
     *  relative-large, alias 'rl'
     *
     * Default: 'm'
     */
    size: string;
    /**
     * Prevent display transparent background.
     *
     * Default: true
     */
    showBackground: boolean;
    /**
     * Floating window, can be drag.
     *
     * Default: false
     */
    floating: boolean;
    /**
     * Panel class.
     *
     * Default: 'panel-default'
     */
    panelClass: string;
    close: EventEmitter<any>;
    zIndex: number;
    position: {
        x: number;
        y: number;
    };
    readonly hideContainer: boolean;
    private top;
    private left;
    private isMouseDown;
    private isDragging;
    private draggingRelativeLocation;
    private readonly sizeClass;
    constructor(windowView: WindowViewService, windowViewLayer: WindowViewLayerService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    closeWindow(): void;
    private onClickWindow();
    private onClickBackground($event);
    private onMouseDown(e);
    private onMouseUp(e);
    private onMouseMove(e);
}
