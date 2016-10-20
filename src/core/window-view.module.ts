import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindowViewService } from './window-view.service';
import { WindowViewContainerComponent } from './window-view-container/window-view-container.component';
import { WindowViewOutletComponent } from './window-view-outlet/window-view-outlet.component';

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
  ],
  providers: [
    WindowViewService
  ]
})
export class WindowViewModule {
}
