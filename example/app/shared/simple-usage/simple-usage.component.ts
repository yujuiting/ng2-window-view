import { Component, ComponentRef } from '@angular/core';
import { WindowViewService } from '../../../../src';
import { SimpleWindowComponent } from '../simple-window/simple-window.component';

@Component({
  selector: 'app-simple-usage',
  template: require('./simple-usage.component.html'),
  providers: [WindowViewService]
})
export class SimpleUsageComponent {

  title: string = 'Simple Window';
  isFloatingWindow: boolean = false;
  showBackground: boolean = true;
  windowSize: string = 'small';
  panelClass: string = 'panel-default';

  constructor(private windowView: WindowViewService) {}

  openWindow() {
    let componentRef = this.windowView.pushWindow(SimpleWindowComponent);
    let simpleWindow: SimpleWindowComponent = componentRef.instance;
    simpleWindow.title = this.title;
    simpleWindow.isFloatingWindow = this.isFloatingWindow;
    simpleWindow.showBackground = this.showBackground;
    simpleWindow.windowSize = this.windowSize;
    simpleWindow.panelClass = this.panelClass;
  }

}
