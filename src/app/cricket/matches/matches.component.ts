import { Component, OnInit } from '@angular/core';
import { MatchserviceService } from '../../services/matchservice.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {
  matches: any[];
  constructor(private matchService: MatchserviceService) {
    matchService.getMatches().subscribe((data: { matches: any[] }) => {
      this.matches = data.matches.slice(0, 10);
    });
  }

  ngOnInit() {
  }

}
