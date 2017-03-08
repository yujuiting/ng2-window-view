import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindowViewContainerComponent } from './window-view-container/window-view-container.component';
import { WindowViewOutletComponent } from './window-view-outlet/window-view-outlet.component';
import { WindowViewService } from './window-view.service';
import { WindowViewLayerService } from './window-view-layer.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    WindowViewContainerComponent,
    WindowViewOutletComponent
  ],
  exports: [
    WindowViewContainerComponent,
    WindowViewOutletComponent
  ]
})
export class WindowViewModule {
  forRoot(): ModuleWithProviders {
    return {
      ngModule: WindowViewModule,
      providers: [
        WindowViewService,
        WindowViewLayerService
      ]
    };
  }
}
