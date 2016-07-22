import { WindowViewService } from '../window-view.service';
export declare class WindowViewContainerComponent {
    private windowView;
    constructor(windowView: WindowViewService);
    heading: string;
    size: string;
    canClose: () => void;
    showBackground: boolean;
    floating: boolean;
    panelClass: string;
    protected top: number;
    protected left: number;
    protected isDragging: boolean;
    private draggingRelativeLocation;
    sizeClass: string;
    clickBackground($event: MouseEvent): void;
    close(): void;
    private onMouseDown(e);
    private onMouseUp(e);
    private onMouseMove(e);
}
