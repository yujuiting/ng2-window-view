import { Component, ComponentRef } from '@angular/core';
import { WindowViewOutletComponent,
         WindowViewService } from '../../../../';
import { SimpleWindowComponent } from '../simple-window';

@Component({
  moduleId: module.id,
  selector: 'app-simple-usage',
  template: require('./simple-usage.component.html'),
  directives: [WindowViewOutletComponent],
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
    this.windowView.pushWindow(SimpleWindowComponent).then((componentRef: ComponentRef<SimpleWindowComponent>) => {
      let simpleWindow: SimpleWindowComponent = componentRef.instance;
      simpleWindow.title = this.title;
      simpleWindow.isFloatingWindow = this.isFloatingWindow;
      simpleWindow.showBackground = this.showBackground;
      simpleWindow.windowSize = this.windowSize;
      simpleWindow.panelClass = this.panelClass;
    });
  }

}
