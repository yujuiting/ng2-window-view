import { Component, ComponentRef } from '@angular/core';
import { WindowViewOutletComponent, WindowViewService } from '../../../';
import { CheckedWindowComponent } from './checked-window.component';
import { Subscription } from 'rxjs/Subscription';

@Component({
  moduleId: module.id,
  selector: 'access-flow',
  templateUrl: 'access-flow.component.html',
  directives: [WindowViewOutletComponent],
  providers: [WindowViewService]
})
export class AccessFlowComponent {
  constructor(private windowView: WindowViewService) {}

  username: string;
  
  openWindow() {
    this.windowView.pushWindow(CheckedWindowComponent)
      .then((componentRef: ComponentRef<CheckedWindowComponent>) => {
        let checkedWindow: CheckedWindowComponent = componentRef.instance;
        let waitResult: Subscription = checkedWindow.result$.subscribe(
          (username: string) => this.username = username,
          () => delete this.username,
          () => waitResult.unsubscribe()
        );
      });
  }
}