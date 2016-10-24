import { Component } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { WindowViewOutletComponent } from './window-view-outlet.component';
import { WindowViewService } from '../window-view.service';

describe('Component: WindowViewOutlet', () => {

  let fixture: ComponentFixture<WindowViewOutletComponent>;
  let service: WindowViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WindowViewOutletComponent],
      providers: [WindowViewService]
    });

    fixture = TestBed.createComponent(WindowViewOutletComponent);
    service = TestBed.get(WindowViewService);
  });

  it('should create an instance', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
