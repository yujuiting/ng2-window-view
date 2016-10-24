import { Component } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';

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

  let fixture: ComponentFixture<TestComponent>;
  let service: WindowViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent],
      providers: [WindowViewService]
    });

    fixture = TestBed.createComponent(TestComponent);
    service = TestBed.get(WindowViewService);
  });

  it('should create an instance', () => {
    expect(service).toBeTruthy();
  });

  describe('Property: length$', () => {

    it('should emit new value after add', () => {
      service.length$.forEach((length) => expect(length).toBe(1));
      service.add(fixture.componentRef);
    });

    it('should emit new value after remove', () => {
      service.add(fixture.componentRef);
      service.length$.forEach((length) => expect(length).toBe(0));
      service.remove(fixture.componentRef);
    });

  });

  describe('Property: open$', () => {

    it('should emit new value after add', () => {
      service.open$.forEach((component) =>
        expect(component).toBe(fixture.componentInstance));
      service.add(fixture.componentRef);
    });

  });

  describe('Property: close$', () => {

    it('should emit new value after remove', () => {
      service.add(fixture.componentRef);
      service.close$.forEach((component) =>
        expect(component).toBe(fixture.componentInstance));
      service.remove(fixture.componentRef);
    });

  });

  describe('Method: remove', () => {

    it('should return false if window view can not close', () => {
      fixture.componentInstance.canClose = false;
      service.add(fixture.componentRef);
      expect(service.remove(fixture.componentRef)).toBeFalsy();
    });

  });

  describe('Method: pushWindow', () => {

    it('should throw if no outlet', () => {
      let throwNotFoundOutlet = () => service.pushWindow(TestComponent);
      expect(throwNotFoundOutlet).toThrowError(
        '[WindowViewService] pushWindow error. Not found window-view-outlet');
    });

  });
});
