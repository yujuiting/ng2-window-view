import { Component, ComponentRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { WindowViewService } from '../../../../src';
import { CheckedWindowComponent } from '../checked-window/checked-window.component';

@Component({
  selector: 'app-access-flow',
  template: require('./access-flow.component.html'),
  providers: [WindowViewService]
})
export class AccessFlowComponent {

  username: string;

  constructor(private windowView: WindowViewService) {}

  openWindow() {
    let checkedWindow: CheckedWindowComponent = this.windowView.pushWindow(CheckedWindowComponent);
    let waitResult: Subscription = checkedWindow.result$.subscribe(
      (username: string) => this.username = username,
      () => delete this.username,
      () => waitResult.unsubscribe()
    );
  }

}
