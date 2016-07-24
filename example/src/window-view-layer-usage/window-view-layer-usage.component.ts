import { Component, ComponentRef } from '@angular/core';
import { WindowViewOutletComponent,
         WindowViewService,
         WindowViewLayerService } from '../../../';
import { FloatingWindowComponent } from './floating-window.component';

@Component({
  moduleId: module.id,
  selector: 'window-view-layer-usage',
  templateUrl: 'window-view-layer-usage.component.html',
  directives: [WindowViewOutletComponent],
  providers: [
    WindowViewService,
    /**
     * If you provide this service, A `WindowViewContainer` with enabled `floating`
     * will be bring to top layer if being click.
     */
    WindowViewLayerService
  ]
})
export class WindowViewLayerUsageComponent {
  constructor(private windowView: WindowViewService) {}
  
  openWindow() {
    this.windowView.pushWindow(FloatingWindowComponent)
      .then((componentRef: ComponentRef<FloatingWindowComponent>) => {
        let lastWindow: FloatingWindowComponent = this.windowView.getWindowInstanceAt(this.windowView.length - 2);
        if (lastWindow) {
          let position: { x: number, y: number } = lastWindow.position
          position.x += 400;
          componentRef.instance.position = position;
        }
      });
  }
}