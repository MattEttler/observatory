import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObservationComponent } from './modules/observation/observation/observation.component';

const routes: Routes = [
  { path: 'observation', component: ObservationComponent },
  { path: '**', redirectTo: '/observation' },
  { path: '', pathMatch: 'full', redirectTo: '/observation' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
