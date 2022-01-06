import { Component, OnInit, ViewChild } from '@angular/core';
import { Vehicles } from '../vehicles/vehicles';
import { VehicleMock } from '../vehicles/vehicles.mock';
import { VehiclesService } from '../vehicles/vehicles.service';

@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.scss'],
})
export class MapContainerComponent implements OnInit {
  private vehicles: Vehicles;
  public markers: any[] = [];
  @ViewChild('map') map: any;

  constructor(private vehicleService: VehicleMock) {
    this.vehicleService.getVehicles().subscribe((vehicles: Vehicles) => {
      this.vehicles = vehicles;
      this.addMarkers();
      this.setCenter();
    });
  }

  markerClustererImagePath =
    'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m';

  addMarkers() {
    this.vehicles.objects.forEach((veh) => {
      this.markers.push({
        position: {
          lat: veh.location.latitude,
          lng: veh.location.longitude,
        },
      });
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

    // //now fit the map to the newly inclusive bounds
    this.map.fitBounds(bounds);

    let listener = google.maps.event.addListener(this.map, 'idle', () => {
      this.map.setZoom(8);
      google.maps.event.removeListener(listener);
    });
  }

  ngOnInit(): void {}
}
