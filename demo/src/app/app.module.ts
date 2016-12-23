import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { WindowViewModule } from '../../../src';
import { WindowViewComponentModule } from '../../../src/components';

import { AppComponent } from './app.component';
import { AccessFlowComponent } from '../examples/access-flow/access-flow.component';
import { MultiFloatingWindowComponent } from '../examples/multi-floating-window/multi-floating-window.component';
import { SimpleUsageComponent } from '../examples/simple-usage/simple-usage.component';
import { WithoutServiceComponent } from '../examples/without-service/without-service.component';
import { ConfirmDialogUsageComponent } from '../examples/confirm-dialog-usage/confirm-dialog-usage.component';

@NgModule({
  declarations: [
    AppComponent,
    AccessFlowComponent,
    MultiFloatingWindowComponent,
    SimpleUsageComponent,
    WithoutServiceComponent,
    ConfirmDialogUsageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    WindowViewModule,
    WindowViewComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
