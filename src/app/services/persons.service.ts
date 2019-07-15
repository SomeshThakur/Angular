import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  personsSelected: number = -1;
  constructor(private http: HttpClient) { }
  getPersons() {
    return this.http.get("https://www.json-generator.com/api/json/get/bQhaGwJCZK?indent=2");
  }
}
