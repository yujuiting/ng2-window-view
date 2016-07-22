import { Component } from '@angular/core';
import { WindowViewOutletComponent, WindowViewService } from '../../../';
import { ControledWindowComponent } from './controled-window.component';

@Component({
  moduleId: module.id,
  selector: 'window-control',
  templateUrl: 'window-control.component.html',
  directives: [WindowViewOutletComponent],
  providers: [WindowViewService]
})
export class WindowControlComponent {
  constructor(private windowView: WindowViewService) {
  }
  
  openWindow() {
    this.windowView.pushWindow(ControledWindowComponent).then(() => {
      setTimeout(() => this.windowView.popWindow(), 2000);
    });
  }
}