import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { WindowViewContainerComponent,
         WindowViewHasResult } from '../../';

@Component({
  selector: 'confirm-dialog',
  templateUrl: 'confirm-dialog/confirm-dialog.component.html',
  styleUrls: ['confirm-dialog/confirm-dialog.component.css'],
  directives: [WindowViewContainerComponent]
})
export class ConfirmDialogComponent implements WindowViewHasResult<boolean> {
  @Input()
  title: string = 'Confirm';

  @Input()
  confirmString: string = 'Ok';

  @Input()
  denyString: string = 'Cancel';

  @Input()
  content: string;

  @Input()
  size: string = 's';

  @Output()
  result: EventEmitter<any> = new EventEmitter();

  @Output()
  dismiss: EventEmitter<any> = new EventEmitter();

  @ViewChild(WindowViewContainerComponent)
  windowViewContainer: WindowViewContainerComponent;

  private _result$: Subject<boolean> = new Subject();

  get result$(): Observable<boolean> { return this._result$.asObservable(); }

  confirm() {
    this._result$.next(true);
    this._result$.complete();
    this.result.emit({ target: this, result: true });
  }

  deny() {
    this._result$.next(false);
    this._result$.complete();
    this.result.emit({ target: this, result: false });
  }

  private onClose() {
    this._result$.complete();
    this.dismiss.emit({ target: this });
  }
}