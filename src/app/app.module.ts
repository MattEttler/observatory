import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservationModule } from './modules/observation/observation.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FEATURE MODULES
    ObservationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
