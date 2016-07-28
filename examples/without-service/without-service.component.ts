import { Component, OnInit } from '@angular/core';
import { WindowViewContainerComponent } from '../../../../';

@Component({
  moduleId: module.id,
  selector: 'app-without-service',
  template: require('./without-service.component.html'),
  directives: [WindowViewContainerComponent]
})
export class WithoutServiceComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
