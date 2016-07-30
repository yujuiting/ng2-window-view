/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement, DynamicComponentLoader, Component } from '@angular/core';
import { beforeEach, async, inject, addProviders,
         TestComponentBuilder, ComponentFixture } from '@angular/core/testing';

import { WindowViewService } from './window-view.service';
import { WindowViewCanClose } from './window-view-can-close';

@Component({
  template: ''
})
class TestComponent implements WindowViewCanClose {
  canClose: boolean = true;
  windowViewCanClose() { return this.canClose; }
}

describe('Service: WindowView', () => {

  let windowView: WindowViewService;
  let componentFixture: ComponentFixture<TestComponent>;

  // provider for service
  beforeEach(() => addProviders([DynamicComponentLoader]));

  // prepare service
  beforeEach(inject([DynamicComponentLoader], (dcl: DynamicComponentLoader) =>
    windowView = new WindowViewService(dcl)));

  // prepare component
  beforeEach(async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) =>
    tcb.createAsync(TestComponent).then((f: ComponentFixture<any>) => componentFixture = f))));

  it('should create an instance', inject(
    [ DynamicComponentLoader ],
    ( dcl: DynamicComponentLoader ) => {
      expect(windowView).toBeTruthy();
    }));

  describe('Property: length$', () => {

    it('should emit new value after add', () => {
      windowView.length$.forEach((length) => expect(length).toBe(1));
      windowView.add(componentFixture.componentRef);
    });

    it('should emit new value after remove', () => {
      windowView.add(componentFixture.componentRef);
      windowView.length$.forEach((length) => expect(length).toBe(0));
      windowView.remove(componentFixture.componentRef);
    });

  });

  describe('Property: open$', () => {

    it('should emit new value after add', () => {
      windowView.open$.forEach((component) =>
        expect(component).toBe(componentFixture.componentInstance));
      windowView.add(componentFixture.componentRef);
    });

  });

  describe('Property: close$', () => {

    it('should emit new value after remove', () => {
      windowView.add(componentFixture.componentRef);
      windowView.close$.forEach((component) =>
        expect(component).toBe(componentFixture.componentInstance));
      windowView.remove(componentFixture.componentRef);
    });

  });

  describe('Method: remove', () => {

    it('should return false if window view can not close', () => {
      componentFixture.componentInstance.canClose = false;
      windowView.add(componentFixture.componentRef);
      expect(windowView.remove(componentFixture.componentRef)).toBeFalsy();
    });

  });

  describe('Method: pushWindow', () => {

    it('should throw if no outlet', () => {
      let throwNotFoundOutlet = () => windowView.pushWindow(TestComponent);
      expect(throwNotFoundOutlet).toThrowError(
        '[WindowViewService] pushWindow error. Not found window-view-outlet');
    });

  });
});
