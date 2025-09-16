import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'rp-table-action-buttons-column',
  templateUrl: './rp-table-action-buttons-column.component.html',
  styleUrls: ['./rp-table-action-buttons-column.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class RpTableActionButtonsColumnComponent {
  @Input({ required: true }) data!: any;
  @Input({ required: true }) column!: any;
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  clicked(key: string) {
    this.onClick.emit({ data: this.data, key: key });
  }

  checkFilter(column: any) {
    if (column.filter) {
      return column.filter(this.data);
    } else {
      return true;
    }
  }
}
