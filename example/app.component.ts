import { Component, ComponentRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { WindowViewService, WindowViewOutletComponent } from 'ng2-window-view';
import { MyWindowComponent } from './my-window.component';

@Component({
  selector: 'app',
  template: `
  <button (click)="openWindow()">Open Window</button>
  <window-view-outlet></window-view-outlet>
  `,
  providers: [ WindowViewService ],
  directives: [WindowViewOutletComponent]
})
export class AppComponent {
  constructor(private windowView: WindowViewService) {}

  openWindow() {
    this.windowView.pushWindow(MyWindowComponent).then((componentRef: ComponentRef<MyWindowComponent>) => {
      let component: MyWindowComponent = componentRef.instance;
      let waitResult: Subscription = component.result$.subscribe(
        (result: boolean) => alert('result => ' + result),
        null,
        () => waitResult.unsubscribe()
      );
    });
  }
}