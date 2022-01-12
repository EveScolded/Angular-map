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
  @Input() isAvaliable!: boolean;
  @Input() batteryLevel!: number;
  @Input() vehicleType!: string;
  @Output() onFiltersChange = new EventEmitter<Filters>();

  checkAvaliability() {
    this.onFiltersChange.emit({
      isAvaliable: (this.isAvaliable = !this.isAvaliable),
      batteryLevel: this.batteryLevel,
      vehicleType: this.vehicleType,
    });
  }

  checkBatteryLevel() {
    this.onFiltersChange.emit({
      batteryLevel: this.batteryLevel,
      isAvaliable: this.isAvaliable,
      vehicleType: this.vehicleType,
    });
  }

  checkVehicleType(event: any) {
    this.onFiltersChange.emit({
      batteryLevel: this.batteryLevel,
      isAvaliable: this.isAvaliable,
      vehicleType: (this.vehicleType = event.value),
    });
  }

  vehTypes: VehTypes[] = [
    { value: 'ALL', viewValue: 'all' },
    { value: 'TRUCK', viewValue: 'truck' },
    { value: 'CAR', viewValue: 'car' },
  ];

  formatLabel(value: number) {
    return value + '%';
  }

  constructor() {}

  ngOnInit(): void {}
}
