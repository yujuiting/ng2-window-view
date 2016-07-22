import { Component, Output, EventEmitter } from '@angular/core';
import { WindowViewContainerComponent } from '../../../';

@Component({
  moduleId: module.id,
  selector: 'isolate-window',
  templateUrl: 'isolate-window.component.html',
  directives: [WindowViewContainerComponent]
})
export class IsolateWindowComponent {
  title: string = 'Isolate Window';
  isFloatingWindow: boolean = false;
  showBackground: boolean = true;
  windowSize: string = 'small';
  panelClass: string = 'panel-default';
  
  @Output()
  close: EventEmitter<any> = new EventEmitter();
}