import { Component, ViewChild } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/observable';
import { WindowViewContainerComponent,
         WindowViewCanClose } from '../../../../';

@Component({
  moduleId: module.id,
  selector: 'app-checked-window',
  template: require('./checked-window.component.html'),
  directives: [WindowViewContainerComponent]
})
export class CheckedWindowComponent implements WindowViewCanClose {
  title: string = 'Simple Window';
  username: string = '';
  alert: string;

  private _result$: Subject<string> = new Subject<string>();
  get result$(): Observable<string> { return this._result$.asObservable(); }

  @ViewChild(WindowViewContainerComponent)
  windowViewContainer: WindowViewContainerComponent;

  windowViewCanClose() {
    if (this.username.length === 0) {
      this.alert = 'Username can not be blank.';
      return false;
    }
    this._result$.next(this.username);
    this._result$.complete();
    return true;
  }

  submit() {
    delete this.alert;
    this.windowViewContainer.closeWindow();
  }

}
