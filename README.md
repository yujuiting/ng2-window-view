# ng2-window-view

[![NPM](https://nodei.co/npm/ng2-window-view.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/ng2-window-view/)
[![NPM](https://nodei.co/npm-dl/ng2-window-view.png?months=3&height=3)](https://nodei.co/npm/ng2-window-view/)

[Documentation & Example Here!](https://yujuiting.github.io/ng2-window-view/)

## Concept

A few of core class for implement window more convenient,
and provide collection of common type of modal, dialog components.

### Core Classes

- `WindowViewContainerComponent` - A window component using bootstrap `panel` class.
                                   Anything wrap by this will present as content of a window.
                                   Provide some common config.

- `WindowViewOutletComponent` - An outlet component similar to `router-outlet`.
                                Require `WindowViewService`, any window push from `WindowViewService`
                                will be placed after outlet component.

- `WindowViewService` - For management of windows. It treat all windows as a stack.
                        You can push or pop window from it.

- `WindowViewLayerService` - Some case, you need multi-floating window feature,
                             that is what `WindowViewLayerService` do.
                             If a `WindowViewContainerComponent` enable `floating` and
                             disable `showBackground`, it will be push into `WindowViewLayerService`.
                             All windows in `WindowViewLayerService` can change `z-index` by clicking
                             component.

### Components

- `ConfirmDialog`


## Usage
```
$ npm install --save ng2-window-view
```

## Quick Start

1. Import module.

```typescript
import { NgModule } from '@angular/core';
import { WindowViewModule } from 'ng2-window-view';
import { MyWindowComponent } from './my-window-component';

@NgModule({
  imports: [
    WindowViewModule
  ],
  entryComponents: [
    // window component have to provide a component factory,
    // by adding component to `entryComponents`.
    MyWindowComponent
  ]
})
export class AppModule {}
```

2. Create your window component.

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

3. Push window component.

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
  providers: [WindowViewService]
})
export class AppComponent {
  constructor(private windowView: WindowViewService) {}
  
  openWindow() {
    this.windowView.pushWindow(MyWindowComponent);
  }
}
```
