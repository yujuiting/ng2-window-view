import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SimpleWindowComponent } from './simple-window.component';
import { WindowViewModule } from '../../../../src';

@NgModule({
  imports: [
    FormsModule,
    WindowViewModule
  ],
  declarations: [SimpleWindowComponent],
  exports: [SimpleWindowComponent],
  entryComponents: [SimpleWindowComponent]
})
export class SimpleWindowModule {}