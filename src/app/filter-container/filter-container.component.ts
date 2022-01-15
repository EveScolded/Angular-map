import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

export interface Filters {
  isAvaliable: boolean;
  batteryLevel: number;
  vehicleType: string;
}

interface VehTypes {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-filter-container',
  templateUrl: './filter-container.component.html',
  styleUrls: ['./filter-container.component.scss'],
})
export class FilterContainerComponent implements OnInit {
  isAvaliable: boolean = false;
  batteryLevel: number = 0;
  vehicleType: string = 'ALL';
  @Input() vehTypes: string[];
  @Output() onFiltersChange = new EventEmitter<Filters>();

  public checkAvaliability() {
    this.onFiltersChange.emit({
      isAvaliable: (this.isAvaliable = !this.isAvaliable),
      batteryLevel: this.batteryLevel,
      vehicleType: this.vehicleType,
    });
  }

  public checkBatteryLevel() {
    this.onFiltersChange.emit({
      batteryLevel: this.batteryLevel,
      isAvaliable: this.isAvaliable,
      vehicleType: this.vehicleType,
    });
  }

  public checkVehicleType(event: any) {
    this.onFiltersChange.emit({
      batteryLevel: this.batteryLevel,
      isAvaliable: this.isAvaliable,
      vehicleType: (this.vehicleType = event.value),
    });
  }

  public formatLabel(value: number) {
    return value + '%';
  }

  ngOnInit(): void {}
}
