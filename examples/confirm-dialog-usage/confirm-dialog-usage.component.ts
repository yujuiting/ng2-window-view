import { Component } from '@angular/core';

@Component({
  selector: 'app-confirm-dialog-usage',
  template: `
  <confirm-dialog *ngIf="showDialog"
                  [confirmString]="confirmString"
                  [denyString]="denyString"
                  [title]="title"
                  (result)="result($event)"
                  (dismiss)="dismiss()">
    <div style="text-align:center">
      <img src="http://ia.media-imdb.com/images/M/MV5BMjI4NjM1NDkyN15BMl5BanBnXkFtZTgwODgyNTY1MjE@._V1.._UX214_CR0,0,214,317_AL_.jpg">
    </div>
  </confirm-dialog>
  <button class="btn btn-default" (click)="showDialog=true">Sexy Woman</button>
  <div *ngIf="ending">
    {{ ending }}
  </div>
  `
})
export class ConfirmDialogUsageComponent {

  showDialog: boolean;
  ending: string;
  title: string = 'Sexy Woman';
  content: string = 'Are you hungry?';
  confirmString: string = 'Yyyyyyyyyy';
  denyString: string = 'Nnnnnnnnn';

  /**
   * e: {
   *  target: ConfirmDialogComponent,
   *  result: boolean
   * }
   */
  result(e: any) {
    if (e.result) {
      this.ending = 'Buuuusy tonight.';
    } else {
      this.ending = 'coding tonight.';
    }
    this.showDialog = false;
  }

  dismiss() {
    delete this.ending;
    this.showDialog = false;
  }

}