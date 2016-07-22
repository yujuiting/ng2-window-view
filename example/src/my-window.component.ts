import { Component, ViewChild } from '@angular/core';
import { WindowViewContainerComponent } from '../../';
import { Subject } from 'rxjs/Subject';

@Component({
  template:`
    <window-view-container [heading]="title" size="s">
      It's a window!!
      <button (click)="yes()">Yes</button>
      <button (click)="no()">No</button>
    </window-view-container>
  `,
  directives: [
    WindowViewContainerComponent
  ]
})
export class MyWindowComponent {

  @ViewChild(WindowViewContainerComponent)
  windowViewContainer: WindowViewContainerComponent;

  title: string = 'My Window';

  result$: Subject<boolean> = new Subject();

  yes() {
    this.result$.next(true);
    this.close();
  }

  no() {
    this.result$.next(false);
    this.close();
  }

  close() {
    this.windowViewContainer.close();
  }

}