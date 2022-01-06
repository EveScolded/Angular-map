import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehicles } from './vehicles';

@Injectable()
export class VehiclesService {
  constructor(private http: HttpClient) {}

  public getVehicles(): Observable<Vehicles> {
    return this.http.get<Vehicles>(
      'https://dev.vozilla.pl/api-client-portal/map?objectType=VEHICLE',
      {
        headers: {
          'x-ctx-organization-id': '38c6047f-d9fd-496b-b4d6-27785499c6d7',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }
}
