import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subscription } from 'rxjs/Subscription';
import { WindowViewService, WindowViewOutletComponent } from '../../dist';
import { MyWindowComponent } from './my-window.component';

@Component({
  selector: 'app',
  templateUrl: 'app.component.html',
  directives: [
    WindowViewOutletComponent
  ],
  providers: [
    WindowViewService
  ]
})
export class AppComponent {
  constructor(private windowView: WindowViewService,
              http: Http) {
    let loadAppComponentTS: Subscription = http.get('example/app.component.ts').subscribe(
      (response: Response) => this.appComponentTS = Prism.highlight(response.text(), Prism.languages['javascript']),
      (error: any) => console.warn(error),
      () => loadAppComponentTS.unsubscribe());

    let loadMyWindowComponentTS: Subscription = http.get('example/my-window.component.ts').subscribe(
      (response: Response) => this.myWindowComponentTS = Prism.highlight(response.text(), Prism.languages['javascript']),
      (error: any) => console.warn(error),
      () => loadMyWindowComponentTS.unsubscribe());
  }

  title: string = 'ng2-window-view example';

  appComponentTS: string;
  myWindowComponentTS: string;

  openWindow() {
    this.windowView.pushWindow(MyWindowComponent);
  }
}