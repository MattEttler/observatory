import { Component, OnInit } from '@angular/core';
import { ObservationService } from '../observation.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'o9y-observation',
  templateUrl: './observation.component.html',
  styleUrls: ['./observation.component.scss']
})
export class ObservationComponent implements OnInit {

  constructor(private _observationService: ObservationService) { }

  ngOnInit() {
  }

  uploadFiles(files: FileList) {
    for (let index = 0; index < files.length; index++) {
      const file = files.item(index);
      this._observationService.uploadObservationImage(file)
        .subscribe(
          () => { },
          (error) => {
            if (!environment.production) {
              console.error(`Observation failed to upload: ${file.name}`);
            }
          }
        );
    }
  }

}
