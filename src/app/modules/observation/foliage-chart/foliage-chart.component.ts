import { Component, OnInit } from '@angular/core';
import { ObservationService } from '../observation.service';

@Component({
  selector: 'o9y-foliage-chart',
  templateUrl: './foliage-chart.component.html',
  styleUrls: ['./foliage-chart.component.scss']
})
export class FoliageChartComponent implements OnInit {

  constructor(private _observationService: ObservationService) {

  }

  data: any;

  ngOnInit() {
    this.updateFoliageChart();
    setInterval(() => this.updateFoliageChart(), 30000);
  }

  updateFoliageChart() {
    this._observationService.getFoliageTimeSeries()
      .subscribe(foliageData => {
        this.data = {
          // tslint:disable-next-line: max-line-length
          labels: foliageData.map(dataPoint => `${new Date(dataPoint.date_time).getUTCFullYear()}/${new Date(dataPoint.date_time).getUTCMonth() + 1}/${new Date(dataPoint.date_time).getUTCDate()}`),
          datasets: [
            {
              label: 'Foliage Cover %',
              data: foliageData.map(dataPoint => dataPoint.foliage_coverage_percentage),
              fill: true,
              borderColor: '#4bc0c0'
            }
          ]
        }
      });
  }
}
