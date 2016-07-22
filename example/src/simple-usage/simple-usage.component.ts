import { Component } from '@angular/core';
import { WindowViewOutletComponent, WindowViewService } from '../../../';
import { SimpleWindowComponent } from './simple-window.component';

@Component({
  moduleId: module.id,
  selector: 'simple-usage',
  templateUrl: 'simple-usage.component.html',
  directives: [WindowViewOutletComponent],
  providers: [WindowViewService]
})
export class SimpleUsageComponent {
  constructor(private windowView: WindowViewService) {}
  
  openWindow() {
    this.windowView.pushWindow(SimpleWindowComponent);
  }
}