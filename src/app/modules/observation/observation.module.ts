import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservationComponent } from './observation/observation.component';
import { StudyComponent } from './study/study.component';
import { FoliageChartComponent } from './foliage-chart/foliage-chart.component';
import { BrowserModule } from '@angular/platform-browser';

import {
  ChartModule
} from 'primeng/primeng';

@NgModule({
  declarations: [ObservationComponent, StudyComponent, FoliageChartComponent],
  imports: [
    BrowserModule,
    ChartModule
  ],
  exports: [ObservationComponent]
})
export class ObservationModule { }
