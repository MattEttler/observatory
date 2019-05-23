import { Component, OnInit, HostBinding } from '@angular/core';
import { ObservationService } from '../observation.service';
import { Observation } from '../models/observation.model';

@Component({
  selector: 'o9y-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.scss']
})
export class StudyComponent implements OnInit {

  public observation: Observation;
  @HostBinding('class') reaction: string;

  constructor(private _observationService: ObservationService) { }

  ngOnInit() {
    this.updateStudy();
    setInterval(() => this.updateStudy(), 30000);
  }

  updateStudy() {
    this._observationService.getLatestObservation().subscribe(observation => {
      this.observation = observation;
      this.reaction = undefined;
    });
  }

  time(ms: any) {
    return new Date(Number(ms)).toISOString();
  }

  public react(reactionType: string) {
    this.reaction = `${reactionType}-reaction`;
    this._observationService.recordReaction(reactionType)
      .subscribe(() => { },
        () => this.reaction = undefined);
  }
}
