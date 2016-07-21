import { Component, AfterViewInit, ViewContainerRef } from '@angular/core';
import { WindowViewService } from '../window-view.service';

@Component({
  selector: 'window-view-outlet'
})
export class WindowViewOutletComponent implements AfterViewInit {

  constructor(private viewContainerRef: ViewContainerRef,
              private windowView: WindowViewService) {}

  ngAfterViewInit() {
    this.windowView.setOutlet(this.viewContainerRef);
  }

}
