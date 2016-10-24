import { NgModule } from '@angular/core';
import { WindowViewModule } from '../';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@NgModule({
  imports: [
    WindowViewModule
  ],
  declarations: [
    ConfirmDialogComponent
  ],
  exports: [
    ConfirmDialogComponent
  ]
})
export class WindowViewComponentModule {}