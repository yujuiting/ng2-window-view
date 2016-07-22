import { WindowViewService } from '../window-view.service';
export declare class WindowViewContainerComponent {
    private windowView;
    constructor(windowView: WindowViewService);
    heading: string;
    size: string;
    canClose: () => void;
    showBackground: boolean;
    sizeClass: string;
    clickBackground($event: MouseEvent): void;
    close(): void;
}
