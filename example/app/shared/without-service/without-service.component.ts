import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-without-service',
  template: require('./without-service.component.html')
})
export class WithoutServiceComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
