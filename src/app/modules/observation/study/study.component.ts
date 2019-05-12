import { Component, OnInit } from '@angular/core';
import { ObservationService } from '../observation.service';
import { Observation } from '../models/observation.model';

@Component({
  selector: 'o9y-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.scss']
})
export class StudyComponent implements OnInit {

  public observation: Observation;
  constructor(private _observationService: ObservationService) { }

  ngOnInit() {
    this.updateStudy();
    setInterval(() => this.updateStudy(), 30000);
  }

  updateStudy() {
    this._observationService.getLatestObservation().subscribe(observation => {
      this.observation = observation;
    });
  }

  time(ms: any) {
    return new Date(Number(ms)).toISOString();
  }
}
