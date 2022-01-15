import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehicles } from './vehicles';

@Injectable()
export class VehiclesService {
  constructor(private http: HttpClient) {}

  public getVehicles(): Observable<Vehicles> {
    return this.http.get<Vehicles>(
      'https://dev.vozilla.pl/api-client-portal/map?objectType=VEHICLE'
    );
  }
}
