import { Component, ComponentRef } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subscription } from 'rxjs/Subscription';
import { WindowViewService, WindowViewOutletComponent } from '../../';
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
      
    let loadWindowViewServiceAPI: Subscription = http.get('lib/window-view.service.d.ts').subscribe(
      (response: Response) => this.windowViewServiceAPI = Prism.highlight(response.text(), Prism.languages['javascript']),
      (error: any) => console.warn(error),
      () => loadWindowViewServiceAPI.unsubscribe());
      
    let loadWindowViewContainerComponentAPI: Subscription = http.get('lib/window-view-container/window-view-container.component.d.ts').subscribe(
      (response: Response) => this.windowViewContainerComponentAPI = Prism.highlight(response.text(), Prism.languages['javascript']),
      (error: any) => console.warn(error),
      () => loadWindowViewContainerComponentAPI.unsubscribe());

  }

  title: string = 'ng2-window-view example';

  appComponentTS: string;
  myWindowComponentTS: string;

  windowViewServiceAPI: string;
  windowViewContainerComponentAPI: string;

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