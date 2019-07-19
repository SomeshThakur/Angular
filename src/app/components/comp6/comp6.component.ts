import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { PersonsService } from 'src/app/services/persons.service';

@Component({
  selector: 'app-comp6',
  templateUrl: './comp6.component.html',
  styleUrls: ['./comp6.component.scss']
})
export class Comp6Component implements OnInit {
  @Input() person: any;
  @Input() id: number;
  elementClass: string;
  msg: string;
  constructor(private personsService: PersonsService) {
    this.personsService.personSelected.subscribe((id) => {
      this.elementClass = this.person.id === id ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action";
    })
  }
  ngOnInit() { }
  onClick() {
    this.personsService.personSelected.next(this.person.id);
  }
}
