import { Component } from '@angular/core';
import { WindowViewContainerComponent } from 'ng2-window-view';

@Component({
  template:`
    <window-view-container [heading]="title" size="s">
      It's a window!!
    </window-view-container>
  `,
  directives: [
    WindowViewContainerComponent
  ]
})
export class MyWindowComponent {
  title: string = 'My Window';
}