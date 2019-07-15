import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { PersonsService } from 'src/app/services/persons.service';

@Component({
  selector: 'app-comp6',
  templateUrl: './comp6.component.html',
  styleUrls: ['./comp6.component.scss']
})
export class Comp6Component implements OnInit, OnChanges {
  @Input() person: any;
  @Input() id: number;
  selected = false;
  class: string;
  msg: string;
  constructor(private personsService: PersonsService) { }

  ngOnChanges() {
    if (this.id === this.person.id) {
      this.class = "selectedCard";
    }
    else {
      this.class = "notselectedCard";
    }
  }
  ngOnInit() {

  }
  onClick() {
    this.selected = true;
    this.personsService.personsSelected = this.person.id;
  }

}
