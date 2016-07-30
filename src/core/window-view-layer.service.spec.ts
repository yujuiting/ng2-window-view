/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { Component } from '@angular/core';
import { beforeEach, async, inject, addProviders,
         TestComponentBuilder, ComponentFixture } from '@angular/core/testing';

import { WindowViewLayerService } from './window-view-layer.service';
import { WindowViewContainerComponent } from './window-view-container';

@Component({
  template: '<window-view-container></window-view-container>',
  directives: [WindowViewContainerComponent],
  providers: [WindowViewLayerService]
})
class TestWindowComponent {}

describe('Service: WindowView', () => {

  let windowViewLayer: WindowViewLayerService;
  let componentFixture: ComponentFixture<TestWindowComponent>;

  // provider for service
  beforeEach(() => addProviders([
    WindowViewLayerService
  ]));

  // prepare component
  beforeEach(async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return tcb
      .overrideProviders(TestWindowComponent, [WindowViewLayerService])
      .createAsync(TestWindowComponent)
      .then((f: ComponentFixture<any>) => componentFixture = f);
  })));

  it('should create an instance', () => {
      expect(windowViewLayer).toBeTruthy();
    });
});
