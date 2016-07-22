import { Component } from '@angular/core';
import { WindowViewContainerComponent } from '../../../';

@Component({
  moduleId: module.id,
  selector: 'simple-window',
  templateUrl: 'simple-window.component.html',
  directives: [WindowViewContainerComponent]
})
export class SimpleWindowComponent {
  title: string = 'Simple Window';
}