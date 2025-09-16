import { Component, EventEmitter, Input, Output } from '@angular/core';
import { COLUMNS_TYPES } from '../../redpandaTypes';

@Component({
  selector: 'rp-table-date',
  templateUrl: './rp-table-date.component.html',
  styleUrls: ['./rp-table-date.component.scss'],
  standalone: true,
})
export class RpTableDateComponent {
  @Input({ required: true }) data!: any;
  @Input({ required: true }) column!: any;
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  ngOnInit() {}

  get columnsTypes() {
    return COLUMNS_TYPES;
  }
}
