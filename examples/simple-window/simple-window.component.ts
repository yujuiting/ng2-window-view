import { Component, ViewChild } from '@angular/core';
import { WindowViewContainerComponent,
         WindowViewService } from '../../../../';

@Component({
  moduleId: module.id,
  selector: 'app-simple-window',
  template: require('./simple-window.component.html'),
  directives: [WindowViewContainerComponent]
})
export class SimpleWindowComponent {
  title: string = 'Simple Window';
  isFloatingWindow: boolean = false;
  showBackground: boolean = true;
  windowSize: string = 'small';
  panelClass: string = 'panel-default';

  @ViewChild(WindowViewContainerComponent)
  windowViewContainer: WindowViewContainerComponent;

  get position(): { x: number, y: number } { return this.windowViewContainer.position; }
  set position(value: { x: number, y: number }) { this.windowViewContainer.position = value; }

  constructor(private windowView: WindowViewService) {}

  openWindow() {
    this.windowView.pushWindow(SimpleWindowComponent);
  }

}
