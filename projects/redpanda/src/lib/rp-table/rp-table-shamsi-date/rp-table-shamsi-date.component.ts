import { Component, EventEmitter, Input, Output } from '@angular/core';
import { COLUMNS_TYPES } from '../../redpandaTypes';

@Component({
  selector: 'rp-table-shamsi-date',
  templateUrl: './rp-table-shamsi-date.component.html',
  styleUrls: ['./rp-table-shamsi-date.component.scss'],
  standalone: true,
})
export class RpTableShamsiDateComponent {
  @Input({ required: true }) data!: any;
  @Input({ required: true }) column!: any;
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  ngOnInit() {}

  get columnsTypes() {
    return COLUMNS_TYPES;
  }
}
