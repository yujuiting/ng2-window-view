import { Component, ViewChild } from '@angular/core';
import { WindowViewContainerComponent } from '../../../';

@Component({
  moduleId: module.id,
  selector: 'controled-window',
  templateUrl: 'controled-window.component.html',
  directives: [WindowViewContainerComponent]
})
export class ControledWindowComponent {
  title: string = 'Controled Window';
}