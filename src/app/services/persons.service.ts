import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  personSelected = new Subject<number>();
  constructor(private http: HttpClient) { }
  getPersons() {
    return this.http.get("https://www.json-generator.com/api/json/get/bQhaGwJCZK?indent=2");
  }
}
