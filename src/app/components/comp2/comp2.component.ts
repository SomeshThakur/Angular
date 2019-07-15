import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component implements OnInit {
  @Input() msg: string;
  @Output() value = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  onSubmit(event: HTMLInputElement) {
    this.value.emit(event.value);
  }
}
