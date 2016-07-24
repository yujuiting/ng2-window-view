import { Injectable } from '@angular/core';

@Injectable()
export class WindowViewLayerService {
  /**
   * Order index is same as z-index.
   */
  private windowViewContainers: any[] = [];

  /**
   * Z-Index of controled window view container will
   * always start at it.
   */
  zIndexStartAt: number = 10;

  add(windowViewContainer) {
    this._add(windowViewContainer);
    this.setAllWindowViewContainersZIndex();
  }

  remove(windowViewContainer) {
    this._remove(windowViewContainer);
    this.setAllWindowViewContainersZIndex();
  }

  bringToTop(windowViewContainer) {
    this._remove(windowViewContainer);
    this._add(windowViewContainer);
    this.setAllWindowViewContainersZIndex();
  }

  private _add(windowViewContainer) {
    this.windowViewContainers.push(windowViewContainer);
  }

  private _remove(windowViewContainer) {
    let index: number = this.windowViewContainers.indexOf(windowViewContainer);
    this.windowViewContainers.splice(index, 1);
  }

  private setAllWindowViewContainersZIndex() {
    this.windowViewContainers.forEach((windowViewContainer, index) =>
      windowViewContainer.zIndex = this.zIndexStartAt + index);
  }
}