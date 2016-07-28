import { Component, ComponentRef } from '@angular/core';
import { WindowViewOutletComponent,
         WindowViewService,
         WindowViewLayerService } from '../../../../';
import { FloatingWindowComponent } from '../floating-window';

@Component({
  moduleId: module.id,
  selector: 'app-multi-floating-window',
  template: require('./multi-floating-window.component.html'),
  directives: [WindowViewOutletComponent],
  providers: [
    WindowViewService,
    WindowViewLayerService
  ]
})
export class MultiFloatingWindowComponent {

  constructor(private windowView: WindowViewService) {}

  openWindow() {
    this.windowView.pushWindow(FloatingWindowComponent)
      .then((componentRef: ComponentRef<FloatingWindowComponent>) => {
        let simpleWindow: FloatingWindowComponent = componentRef.instance;
        let lastWindow: FloatingWindowComponent = this.windowView.getWindowInstanceAt(this.windowView.length - 2);
        if (lastWindow) {
          let position: { x: number, y: number } = lastWindow.position;
          position.x += 400;
          simpleWindow.position = position;
        }
      });
  }

}
