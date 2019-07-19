import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Comp2Component } from '../comp2/comp2.component';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {
  msg = '';
  value = '';
  constructor() { }

  ngOnInit() {
  }
  onValueEmitted(value: any) {
    if (value.length) {
      this.value = `The value got from component 2 is "${value}"`;
    }
  }
}
