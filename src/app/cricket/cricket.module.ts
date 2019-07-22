import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchComponent } from './match/match.component';
import { MatchesComponent } from './matches/matches.component';
import { CricketRoutingModule } from './cricket-routing.module';

@NgModule({
  declarations: [MatchComponent, MatchesComponent],
  imports: [
    CommonModule,
    CricketRoutingModule
  ],
  exports: [MatchComponent, MatchesComponent]
})
export class CricketModule { }
