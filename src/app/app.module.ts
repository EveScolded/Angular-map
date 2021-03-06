import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { VehiclesService } from './vehicles/vehicles.service';
import { VehicleMock } from './vehicles/vehicles.mock';
import { DialogDetailsComponent } from './dialog-details/dialog-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FilterContainerComponent } from './filter-container/filter-container.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    DialogDetailsComponent,
    LoadingSpinnerComponent,
    FilterContainerComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    GoogleMapsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatSliderModule,
    FormsModule,
    MatProgressBarModule,
  ],
  providers: [VehiclesService, VehicleMock, MatDialogModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
