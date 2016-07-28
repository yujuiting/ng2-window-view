import { Component, ComponentRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { WindowViewOutletComponent,
         WindowViewService } from '../../../../';
import { CheckedWindowComponent } from '../checked-window';

@Component({
  moduleId: module.id,
  selector: 'app-access-flow',
  template: require('./access-flow.component.html'),
  directives: [WindowViewOutletComponent],
  providers: [WindowViewService]
})
export class AccessFlowComponent {

  username: string;

  constructor(private windowView: WindowViewService) {}

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
