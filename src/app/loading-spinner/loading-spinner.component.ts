import { Component, Input } from '@angular/core';

@Component({
  selector: 'loading-spinner',
  template: '<mat-spinner *ngIf="show"></mat-spinner>',
  styleUrls: ['./loading-spinner.component.scss'],
})
export class LoadingSpinnerComponent {
  @Input() show: boolean;
}
