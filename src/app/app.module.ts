import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MapContainerComponent } from './map-container/map-container.component';
import { VehiclesService } from './vehicles/vehicles.service';
import { VehicleMock } from './vehicles/vehicles.mock';

@NgModule({
  declarations: [AppComponent, MapContainerComponent],
  imports: [BrowserModule, GoogleMapsModule, HttpClientModule],
  providers: [VehiclesService, VehicleMock],
  bootstrap: [AppComponent],
})
export class AppModule {}
