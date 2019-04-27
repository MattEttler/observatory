import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservationComponent } from './observation/observation.component';

@NgModule({
  declarations: [ObservationComponent],
  imports: [
    CommonModule
  ],
  exports: [ObservationComponent]
})
export class ObservationModule { }
