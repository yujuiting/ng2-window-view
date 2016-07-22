# ng2-window-view
[Documentation & Example Here!](https://yujuiting.github.io/ng2-window-view/)

## Usage
```
$ npm install --save ng2-window-view
```

## Quick Start

1. Create your window component.

```typescript
import { Component } from '@angular/core';
import { WindowViewContainerComponent } from 'ng2-window-view';

@Component({
  selector: 'my-window',
  template: `
  <window-view-container [heading]="windowTitle">
    It's a window!!
  </window-view-container>`
})
export class MyWindowComponent {
  windowTitle: string = 'Title here!';
}
```

2. Push window component.

```typescript
import { Component, ComponentRef } from '@angular/core';
import { WindowViewOutletComponent, WindowViewService } from 'ng2-window-view';
import { MyWindowComponent } from './my-window';

@Component({
  selector: 'app-root',
  template: `
  <button (click)="openWindow()">Open Window</button>
  <window-view-outlet></window-view-outlet>
  `,
  directives: [WindowViewOutletComponent],
  providers: [WindowViewService]
})
export class AppComponent {
  constructor(private windowView: WindowViewService) {}
  
  openWindow() {
    this.windowView.pushWindow(MyWindowComponent);
  }
}
```