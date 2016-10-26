import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { WindowViewModule } from '../../src';
import { WindowViewComponentModule } from '../../src/components';

import { AppComponent } from './app.component';
import { AccessFlowComponent } from './shared/access-flow/access-flow.component';
import { CheckedWindowComponent } from './shared/checked-window/checked-window.component';
import { FloatingWindowComponent } from './shared/floating-window/floating-window.component';
import { MultiFloatingWindowComponent } from './shared/multi-floating-window/multi-floating-window.component';
import { SimpleUsageComponent } from './shared/simple-usage/simple-usage.component';
import { SimpleWindowComponent } from './shared/simple-window/simple-window.component';
import { WithoutServiceComponent } from './shared/without-service/without-service.component';
import { ConfirmDialogUsageComponent } from './shared/confirm-dialog-usage/confirm-dialog-usage.component';


@NgModule({
  declarations: [
    AppComponent,
    AccessFlowComponent,
    CheckedWindowComponent,
    FloatingWindowComponent,
    MultiFloatingWindowComponent,
    SimpleUsageComponent,
    // SimpleWindowComponent,
    WithoutServiceComponent,
    ConfirmDialogUsageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    WindowViewModule,
    WindowViewComponentModule
  ],
  entryComponents: [
    CheckedWindowComponent,
    FloatingWindowComponent,
    // SimpleWindowComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }