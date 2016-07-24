import { Component, ComponentRef } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subscription } from 'rxjs/Subscription';

import { IsolateWindowComponent } from './without-service/isolate-window.component';
import { SimpleUsageComponent } from './simple-usage/simple-usage.component';
import { ConfirmDialogUsageComponent } from './confirm-dialog/confirm-dialog-usage.component';
import { WindowControlComponent } from './window-control/window-control.component';
import { AccessFlowComponent } from './access-flow/access-flow.component';
import { WindowViewLayerUsageComponent } from './window-view-layer-usage/window-view-layer-usage.component';

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    IsolateWindowComponent,
    SimpleUsageComponent,
    ConfirmDialogUsageComponent,
    WindowControlComponent,
    AccessFlowComponent,
    WindowViewLayerUsageComponent
  ]
})
export class AppComponent {
  constructor(private http: Http) {
    this.loadFile('without-service', 'example/src/without-service', 'isolate-window.component.ts');
    this.loadFile('without-service', 'example/src/without-service', 'isolate-window.component.html');
    this.loadFile('without-service', 'example/src/without-service', 'without-service-example.html');
    this.withoutServiceFilename = 'isolate-window.component.ts';

    this.loadFile('simple-usage', 'example/src/simple-usage', 'simple-usage.component.ts');
    this.loadFile('simple-usage', 'example/src/simple-usage', 'simple-usage.component.html');
    this.loadFile('simple-usage', 'example/src/simple-usage', 'simple-window.component.ts');
    this.loadFile('simple-usage', 'example/src/simple-usage', 'simple-window.component.html');
    this.simpleUsageFilename = 'simple-usage.component.ts';

    this.loadFile('confirm-dialog-usage', 'example/src/confirm-dialog', 'confirm-dialog-usage.component.ts');
    this.confirmDialogUsageFilename = 'confirm-dialog-usage.component.ts';

    this.loadFile('window-control', 'example/src/window-control', 'window-control.component.ts');
    this.loadFile('window-control', 'example/src/window-control', 'window-control.component.html');
    this.loadFile('window-control', 'example/src/window-control', 'controled-window.component.ts');
    this.loadFile('window-control', 'example/src/window-control', 'controled-window.component.html');
    this.windowControlFilename = 'window-control.component.ts';

    this.loadFile('access-flow', 'example/src/access-flow', 'access-flow.component.ts');
    this.loadFile('access-flow', 'example/src/access-flow', 'access-flow.component.html');
    this.loadFile('access-flow', 'example/src/access-flow', 'checked-window.component.ts');
    this.loadFile('access-flow', 'example/src/access-flow', 'checked-window.component.html');
    this.accessFlowFilename = 'access-flow.component.ts';
    
    this.loadFile('window-view-layer-usage', 'example/src/window-view-layer-usage', 'window-view-layer-usage.component.ts');
    this.loadFile('window-view-layer-usage', 'example/src/window-view-layer-usage', 'window-view-layer-usage.component.html');
    this.loadFile('window-view-layer-usage', 'example/src/window-view-layer-usage', 'floating-window.component.ts');
    this.loadFile('window-view-layer-usage', 'example/src/window-view-layer-usage', 'floating-window.component.html');
    this.windowViewLayerUsageFilename = 'window-view-layer-usage.component.ts';

    this.loadFile('basis-api', 'lib', 'window-view.service.d.ts');
    this.loadFile('basis-api', 'lib', 'window-view-layer.service.d.ts');
    this.loadFile('basis-api', 'lib', 'window-view-can-close.d.ts');
    this.loadFile('basis-api', 'lib', 'window-view-has-result.d.ts');
    this.loadFile('basis-api', 'lib/window-view-container', 'window-view-container.component.d.ts');
    
    this.loadFile('component-api', 'components/confirm-dialog', 'confirm-dialog.component.d.ts');
  }

  files: { [group: string]: { [filename: string]: string } } = {};

  // ui status
  title: string = 'ng2-window-view example';
  totalLoadCount: number = 0;
  loadedCount: number = 0;
  get loadPercent(): number { return Math.floor(this.loadedCount / this.totalLoadCount * 100); }
  showIsolateWindow: boolean = false;
  withoutServiceFilename: string;
  simpleUsageFilename: string;
  confirmDialogUsageFilename: string;
  windowControlFilename: string;
  accessFlowFilename: string;
  windowViewLayerUsageFilename: string;

  fileList(group: string) {
    return Object.keys(this.files[group] || {});
  }

  loadFile(group: string, dir: string, filename: string) {
    this.totalLoadCount++;
    this.files[group] = this.files[group] || {};
    let language: string = 'typescript';
    if (!!/html$/.test(filename)) {
      language = 'html';
    }
    let loadFile: Subscription = this.http.get(`${dir}/${filename}`)
      .subscribe(
        (response: Response) => {
          this.files[group][filename] = Prism.highlight(response.text(), Prism.languages[language]);
          this.loadedCount++;
        },
        (error: any) => console.warn(error),
        () => loadFile.unsubscribe()
      );
  }
}