import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchserviceService {

  constructor(private http: HttpClient) { }

  getMatches() {
    return this.http.get('https://cricapi.com/api/matches?apikey=Tz932UboR9er74b7svXEKKFNZu72');
  }
}
