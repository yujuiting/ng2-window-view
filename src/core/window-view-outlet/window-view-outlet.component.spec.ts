/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement, ViewContainerRef, DynamicComponentLoader } from '@angular/core';
import { beforeEach, async, inject, addProviders } from '@angular/core/testing';

import { WindowViewOutletComponent } from './window-view-outlet.component';
import { WindowViewService } from '../window-view.service';

describe('Component: WindowViewOutlet', () => {

  let windowView: WindowViewService;

  beforeEach(() => addProviders([
    DynamicComponentLoader,
    ViewContainerRef
  ]));

  beforeEach(inject([DynamicComponentLoader], (dcl: DynamicComponentLoader) => {
    windowView = new WindowViewService(dcl);
  }));

  it('should create an instance', inject([ViewContainerRef], (viewContainerRef: ViewContainerRef) => {
    let component = new WindowViewOutletComponent(viewContainerRef, windowView);
    expect(component).toBeTruthy();
  }));
});
