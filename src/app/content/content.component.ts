import { Component, OnInit, ViewChild } from '@angular/core';
import { Vehicle, Vehicles } from '../vehicles/vehicles';
import { VehicleMock } from '../vehicles/vehicles.mock';
import { VehiclesService } from '../vehicles/vehicles.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogDetailsComponent } from '../dialog-details/dialog-details.component';
import { Filters } from '../filter-container/filter-container.component';
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  public vehicles: Vehicles;
  public markers: any[] = [];
  public showSpinner: boolean = true;
  public avaliableFilterIsOn: boolean = false;
  public sliderBatteryLevel: number = 50;
  public checkedVehicleType: string = 'ALL';
  @ViewChild('map') map: GoogleMap;

  constructor(private vehicleService: VehicleMock, public dialog: MatDialog) {
    this.vehicleService.getVehicles().subscribe((vehicles: Vehicles) => {
      this.vehicles = vehicles;
      this.addMarkers();
      this.setCenter();
      this.showSpinner = false;
    });
  }

  markerClustererImagePath =
    'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m';

  onFiltersChange(filters: Filters) {
    this.avaliableFilterIsOn = filters.isAvaliable;
    this.sliderBatteryLevel = filters.batteryLevel;
    this.checkedVehicleType = filters.vehicleType;
    this.addMarkers();
  }

  addMarkers() {
    this.markers = [];
    this.vehicles.objects.forEach((veh) => {
      if (
        (!this.avaliableFilterIsOn || veh.status === 'AVAILABLE') &&
        veh.batteryLevelPct >= this.sliderBatteryLevel &&
        (veh.type === this.checkedVehicleType ||
          this.checkedVehicleType === 'ALL')
      ) {
        this.markers.push({
          position: {
            lat: veh.location.latitude,
            lng: veh.location.longitude,
          },
          iconColor:
            veh.status === 'AVAILABLE'
              ? '../assets/car-green64x64.png'
              : '../assets/car-grayscale64x64.png',
        });
      }
    });
  }

  setCenter() {
    let bounds = new google.maps.LatLngBounds();

    for (let i = 0; i < this.markers.length; i++) {
      let marker = new google.maps.Marker({
        position: new google.maps.LatLng(
          this.markers[i].position.lat,
          this.markers[i].position.lng
        ),
      });

      bounds.extend(marker.getPosition() as any);
    }

    this.map.fitBounds(bounds);
    // let listener = google.maps.event.addListener(this.map, 'idle', () => {
    //   this.map.setZoom(8);
    //   google.maps.event.removeListener(listener);
    // });
  }

  openDialog(veh: Vehicle) {
    this.dialog.open(DialogDetailsComponent, {
      data: {
        vehicle: veh,
      },
    });
  }

  ngOnInit(): void {
    this.showSpinner = true;
  }
}
