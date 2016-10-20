import { Injectable, Type } from '@angular/core';
import { WindowViewContainerComponent } from './window-view-container/window-view-container.component';

@Injectable()
export class WindowViewLayerService {
  /**
   * Order index is same as z-index.
   */
  private windowViewContainers: WindowViewContainerComponent[] = [];

  /**
   * Z-Index of controled window view container will
   * always start at it.
   */
  zIndexStartAt: number = 10;

  add(windowViewContainer: WindowViewContainerComponent) {
    this._add(windowViewContainer);
    this.setAllWindowViewContainersZIndex();
  }

  remove(windowViewContainer: WindowViewContainerComponent) {
    this._remove(windowViewContainer);
    this.setAllWindowViewContainersZIndex();
  }

  bringToTop(windowViewContainer: WindowViewContainerComponent) {
    this._remove(windowViewContainer);
    this._add(windowViewContainer);
    this.setAllWindowViewContainersZIndex();
  }

  private _add(windowViewContainer: WindowViewContainerComponent) {
    this.windowViewContainers.push(windowViewContainer);
  }

  private _remove(windowViewContainer: WindowViewContainerComponent) {
    let index: number = this.windowViewContainers.indexOf(windowViewContainer);
    this.windowViewContainers.splice(index, 1);
  }

  private setAllWindowViewContainersZIndex() {
    this.windowViewContainers.forEach((windowViewContainer, index) =>
      windowViewContainer.zIndex = this.zIndexStartAt + index);
  }
}