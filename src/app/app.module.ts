import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MapContainerComponent } from './map-container/map-container.component';
import { VehiclesService } from './vehicles/vehicles.service';
import { VehicleMock } from './vehicles/vehicles.mock';
import { DialogDetailsComponent } from './dialog-details/dialog-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [AppComponent, MapContainerComponent, DialogDetailsComponent],
  imports: [
    BrowserModule,
    GoogleMapsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [VehiclesService, VehicleMock, MatDialogModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
