import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {
  @Input() match: { unique_id: number, "team-1": string, "team-2": string };
  constructor() { }
  ngOnInit() {
  }

}
