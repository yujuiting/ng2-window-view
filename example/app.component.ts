import { Component } from '@angular/core';
import { WindowViewService } from 'ng2-window-view';
import { MyWindowComponent } from './my-window.component';

@Component({
  selector: 'app',
  providers: [ WindowViewService ]
})
export class AppComponent {
  constructor(private windowView: WindowViewService) {}

  openWindow() {
    this.windowView.pushWindow(MyWindowComponent);
  }
}