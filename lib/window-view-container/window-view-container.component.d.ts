import { EventEmitter } from '@angular/core';
import { WindowViewService } from '../window-view.service';
export declare class WindowViewContainerComponent {
    private windowView;
    constructor(windowView?: WindowViewService);
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
    private top;
    private left;
    private isDragging;
    private draggingRelativeLocation;
    private sizeClass;
    closeWindow(): void;
    private clickBackground($event);
    private onMouseDown(e);
    private onMouseUp(e);
    private onMouseMove(e);
}
