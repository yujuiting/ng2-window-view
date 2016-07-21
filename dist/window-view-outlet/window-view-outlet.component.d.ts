import { AfterViewInit, ViewContainerRef } from '@angular/core';
import { WindowViewService } from '../window-view.service';
export declare class WindowViewOutletComponent implements AfterViewInit {
    private viewContainerRef;
    private windowView;
    constructor(viewContainerRef: ViewContainerRef, windowView: WindowViewService);
    ngAfterViewInit(): void;
}
