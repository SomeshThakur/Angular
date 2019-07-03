import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Comp2Component } from '../comp2/comp2.component';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit, AfterViewInit {
  msg = '';
  value = '';
  @ViewChild(Comp2Component, { static: false }) c2;
  constructor() { }
  ngAfterViewInit(): void {
    console.log(this.c2)
  }

  ngOnInit() {
  }
  onValueEmitted(value: any) {
    if (value.length) {
      this.value = `The value got from component 2 is "${value}"`;
    }
  }
  setMessage(event: any) {

    this.msg = `The value got from component 1 is ${event.target.value}`;
  }
}
