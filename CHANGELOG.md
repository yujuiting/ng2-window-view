# ChangeLog

## 0.2.0 (2016-12-24)

- Upgrade Angular to 2.4.*.

## 0.1.1 (2016-10-27)

### Features

- Dynamic compile component. ([20c33ec](https://github.com/yujuiting/ng2-window-view/commit/20c33ec1178234b02c079f73889f21364a41b9a3))

  [Please checkout document](https://github.com/yujuiting/ng2-window-view/blob/master/docs/dynamic-compile.md)

## 0.1.0 (2016-10-24)

### Breaking changes

- `WindowViewService#pushWindow<T>` return instance directly instead of promise.

```typescript
let myWindow: MyWindowComponent = this.windowView.pushWindow(MyWindowComponent);
myWindow.result$.subscribe( result => /** Do something */);
```

- `WindowViewService#getWindowInstanceAt` rename to `WindowViewService#getInstanceAt`.

- `WindowViewService#removeWindowByInstance` rename to `WindowViewService#removeByInstance`;
