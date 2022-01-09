import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

export interface Filters {
  isAvaliable: boolean;
  batteryLevel: number;
}
@Component({
  selector: 'app-filter-container',
  templateUrl: './filter-container.component.html',
  styleUrls: ['./filter-container.component.scss'],
})
export class FilterContainerComponent implements OnInit {
  @Input() isAvaliable!: boolean;
  @Input() batteryLevel!: number;
  @Output() onFiltersChange = new EventEmitter<Filters>();

  checkAvaliability() {
    this.onFiltersChange.emit({
      isAvaliable: (this.isAvaliable = !this.isAvaliable),
      batteryLevel: this.batteryLevel,
    });
  }

  checkBatteryLevel() {
    this.onFiltersChange.emit({
      batteryLevel: this.batteryLevel,
      isAvaliable: this.isAvaliable,
    });
  }

  formatLabel(value: number) {
    return value + '%';
  }

  constructor() {}

  ngOnInit(): void {}
}
