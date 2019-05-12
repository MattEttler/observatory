import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservationComponent } from './observation/observation.component';
import { StudyComponent } from './study/study.component';

@NgModule({
  declarations: [ObservationComponent, StudyComponent],
  imports: [
    CommonModule
  ],
  exports: [ObservationComponent]
})
export class ObservationModule { }
