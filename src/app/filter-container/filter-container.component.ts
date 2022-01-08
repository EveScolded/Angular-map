import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-container',
  templateUrl: './filter-container.component.html',
  styleUrls: ['./filter-container.component.scss'],
})
export class FilterContainerComponent implements OnInit {
  @Input() isAvaliable!: boolean;
  @Output() isAvaliableChange = new EventEmitter<boolean>();

  checkAvaliability() {
    this.isAvaliableChange.emit((this.isAvaliable = !this.isAvaliable));
  }
  constructor() {}

  ngOnInit(): void {}
}
