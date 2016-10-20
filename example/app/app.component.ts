import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subscription } from 'rxjs/Subscription';

interface ExampleFile {
  type: string;
  html: string;
}

@Component({
  selector: 'app-root',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')]
})
export class AppComponent {
  title: string = 'ng2-window-view example';

  files: { [group: string]: { [filename: string]: ExampleFile } } = {};

  // ui status
  totalLoadCount: number = 0;
  loadedCount: number = 0;
  get loadPercent(): number { return Math.floor(this.loadedCount / this.totalLoadCount * 100); }

  withoutServiceFilename: string;
  simpleUsageFilename: string;
  // windowControlFilename: string;
  accessFlowFilename: string;
  MultiFloatingWindowFilename: string;
  confirmDialogUsageFilename: string;

  constructor(private http: Http) {
    this.loadAssets();
  }

  loadAssets() {

    this.loadFile('simple-usage', 'examples/simple-usage', 'simple-usage.component.ts');
    this.loadFile('simple-usage', 'examples/simple-usage', 'simple-usage.component.html');
    this.loadFile('simple-usage', 'examples/simple-window', 'simple-window.component.ts');
    this.loadFile('simple-usage', 'examples/simple-window', 'simple-window.component.html');
    this.simpleUsageFilename = 'simple-usage.component.ts';

    this.loadFile('without-service', 'examples/without-service', 'without-service.component.ts');
    this.loadFile('without-service', 'examples/without-service', 'without-service.component.html');
    this.withoutServiceFilename = 'without-service.component.ts';

    this.loadFile('access-flow', 'examples/access-flow', 'access-flow.component.ts');
    this.loadFile('access-flow', 'examples/access-flow', 'access-flow.component.html');
    this.loadFile('access-flow', 'examples/checked-window', 'checked-window.component.ts');
    this.loadFile('access-flow', 'examples/checked-window', 'checked-window.component.html');
    this.accessFlowFilename = 'access-flow.component.ts';

    this.loadFile('multi-floating-window', 'examples/multi-floating-window', 'multi-floating-window.component.ts');
    this.loadFile('multi-floating-window', 'examples/multi-floating-window', 'multi-floating-window.component.html');
    this.loadFile('multi-floating-window', 'examples/floating-window', 'floating-window.component.ts');
    this.loadFile('multi-floating-window', 'examples/floating-window', 'floating-window.component.html');
    this.MultiFloatingWindowFilename = 'multi-floating-window.component.ts';

    this.loadFile('confirm-dialog-usage', 'examples/confirm-dialog-usage', 'confirm-dialog-usage.component.ts');
    this.confirmDialogUsageFilename = 'confirm-dialog-usage.component.ts';

    this.loadFile('core-api', 'examples/api/core', 'window-view.service.d.ts');
    this.loadFile('core-api', 'examples/api/core', 'window-view-layer.service.d.ts');
    this.loadFile('core-api', 'examples/api/core', 'window-view-can-close.d.ts');
    this.loadFile('core-api', 'examples/api/core', 'window-view-has-result.d.ts');
    this.loadFile('core-api', 'examples/api/core/window-view-container', 'window-view-container.component.d.ts');
    this.loadFile('components-api', 'examples/api/components/confirm-dialog', 'confirm-dialog.component.d.ts');

  }

  fileList(group: string) {
    return Object.keys(this.files[group] || {});
  }

  loadFile(group: string, dir: string, filename: string) {
    this.totalLoadCount++;
    this.files[group] = this.files[group] || {};
    let language = 'typescript';
    if (!!/html$/.test(filename)) {
      language = 'html';
    }
    let loadFile: Subscription = this.http.get(`${dir}/${filename}`)
      .subscribe(
        (response: Response) => {
          let file: string = response.text()
            .replace('../../../../src/components', 'ng2-window-view/components')
            .replace('../../../../src', 'ng2-window-view');

          this.files[group][filename] = {
            html: Prism.highlight(file, Prism.languages[language]),
            type: language
          };
          this.loadedCount++;
        },
        (error: any) => console.warn(error),
        () => loadFile.unsubscribe()
      );
  }
}
