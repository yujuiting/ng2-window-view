import { Component } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { WindowViewService } from './window-view.service';
import { WindowViewLayerService } from './window-view-layer.service';
import { WindowViewContainerComponent } from './window-view-container/window-view-container.component';
import { WindowViewOutletComponent } from './window-view-outlet/window-view-outlet.component';

@Component({
  template: '<window-view-container></window-view-container>'
})
class TestWindowComponent {}

@Component({
  template: `
  <window-view-outlet></window-view-outlet>
  `
})
class TestAppComponent {}

describe('Service: WindowView', () => {

  let fixture: ComponentFixture<TestAppComponent>;
  let windowView: WindowViewService;
  let windowViewLayer: WindowViewLayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestAppComponent,
        WindowViewContainerComponent,
        WindowViewOutletComponent
      ],
      providers: [
        WindowViewLayerService,
        WindowViewService
      ]
    });

    fixture = TestBed.createComponent(TestAppComponent);
    windowView = TestBed.get(WindowViewService);
    windowViewLayer = TestBed.get(WindowViewLayerService);
  });

  it('should create an instance', () => {
    expect(windowViewLayer).toBeTruthy();
  });
});
