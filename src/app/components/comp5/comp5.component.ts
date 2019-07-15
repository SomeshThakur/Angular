import { Component, OnInit } from '@angular/core';
import { PersonsService } from 'src/app/services/persons.service';
import { log } from 'util';

@Component({
  selector: 'app-comp5',
  templateUrl: './comp5.component.html',
  styleUrls: ['./comp5.component.scss'],
  providers: [PersonsService]
})
export class Comp5Component implements OnInit {
  persons: any[];
  msg: string;


  // To demonstrate the life cycle of component enable this flag

  showLifeCycle = false;

  constructor(private personsService: PersonsService) {
    if (this.showLifeCycle) alert("Constructor");
    personsService.getPersons().subscribe((data: any) => {
      this.persons = data;
    });
  }
  ngOnChanges() {
    if (this.showLifeCycle) alert("ngOnChanges");
  }
  onClick() {
    this.persons = this.persons.filter(person => {
      return person.id !== this.personsService.personsSelected
    })
  }
  ngOnInit() {
    if (this.showLifeCycle) alert("ngOnInit");

  }


  ngDoCheck() {
    if (this.showLifeCycle) alert("ngDoCheck");

  }

  ngAfterContentInit() {
    if (this.showLifeCycle) alert("ngAfterContentInit");
  }

  ngAfterContentChecked() {
    if (this.showLifeCycle) alert("ngAfterContentChecked"); //
  }

  ngAfterViewInit() {
    if (this.showLifeCycle) alert("ngAfterViewInit");
  }

  ngAfterViewChecked() {
    if (this.showLifeCycle) alert("ngAfterViewChecked");
  }

  ngOnDestroy() {
    if (this.showLifeCycle) alert("ngOnDestroy");
  }
}
