import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { NiraSnackBarService } from 'nira-snack-bar';
import { CloseIconComponent } from '../../../svg-icon/close-icon/close-icon.component';
import { cloneDeep } from 'lodash';
import { FormsModule } from '@angular/forms';
import { CheckIconComponent } from '../../../svg-icon/check-icon/check-icon.component';

@Component({
  selector: 'rp-table-color-column',
  templateUrl: './rp-table-color-column.component.html',
  styleUrls: ['./rp-table-color-column.component.css'],
  standalone: true,
  imports: [CommonModule, CloseIconComponent, FormsModule, CheckIconComponent],
})
export class RpTableColorColumnComponent {
  @Input({ required: true }) data: any;
  @Input({ required: true }) column!: any;
  @Output() onColumnValueChanged: EventEmitter<any> = new EventEmitter();
  canEdit = false;
  value = '';
  get color() {
    return this.data[this.column.key].startsWith('#')
      ? this.data[this.column.key]
      : '#' + this.data[this.column.key];
  }
  // constructor(private niraSnackBar: NiraSnackBarService) {}

  setValue() {
    const newData = cloneDeep(this.data);
    newData[this.column.key] = this.value;
    this.onColumnValueChanged.emit(newData);
    this.canEdit = false;
  }

  onColumnClicked(column: any, data: string, event: MouseEvent) {
    if (event.ctrlKey && column.editable) {
      this.value = data;
      this.canEdit = true;
    }
  }
}
