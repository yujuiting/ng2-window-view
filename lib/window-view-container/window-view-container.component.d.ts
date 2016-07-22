import { EventEmitter } from '@angular/core';
import { WindowViewService } from '../window-view.service';
export declare class WindowViewContainerComponent {
    private windowView;
    constructor(windowView?: WindowViewService);
    heading: string;
    size: string;
    showBackground: boolean;
    floating: boolean;
    panelClass: string;
    close: EventEmitter<any>;
    protected top: number;
    protected left: number;
    protected isDragging: boolean;
    private draggingRelativeLocation;
    sizeClass: string;
    clickBackground($event: MouseEvent): void;
    closeWindow(): void;
    private onMouseDown(e);
    private onMouseUp(e);
    private onMouseMove(e);
}
