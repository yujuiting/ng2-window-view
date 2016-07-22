/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement, ViewContainerRef } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { WindowViewOutletComponent } from './window-view-outlet.component';
import { WindowViewService } from '../window-view.service';

describe('Component: WindowViewOutlet', () => {

  it('should create an instance', inject(
    [ViewContainerRef, WindowViewService],
    (viewContainerRef: ViewContainerRef, windowView: WindowViewService) => {
      let component = new WindowViewOutletComponent(viewContainerRef, windowView);
      expect(component).toBeTruthy();
  }));
});
