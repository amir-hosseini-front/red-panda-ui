import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { cloneDeep } from 'lodash';
import { RpRadioButtonsComponent } from '../../rp-radio-buttons/rp-radio-buttons.component';
import { CloseIconComponent } from '../../../svg-icon/close-icon/close-icon.component';
import { CheckIconComponent } from '../../../svg-icon/check-icon/check-icon.component';

@Component({
  selector: 'rp-table-status-column',
  templateUrl: './rp-table-status-column.component.html',
  styleUrls: ['./rp-table-status-column.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RpRadioButtonsComponent,
    CloseIconComponent,
    CheckIconComponent,
  ],
})
export class RpTableStatusColumnComponent {
  @Input({ required: true }) data!: any;
  @Input({ required: true }) column!: any;
  @Output() onColumnValueChanged: EventEmitter<any> = new EventEmitter();

  canEdit = false;
  value: boolean = false;
  radioButtonData = [
    { value: true, title: 'فعال' },
    { value: false, title: 'غیر فعال' },
  ];

  onChange(event: string) {
    this.value = event === 'true' ? true : false;
  }
  setValue() {
    const newData = cloneDeep(this.data);
    newData[this.column.key] = this.value;
    this.onColumnValueChanged.emit(newData);
    this.canEdit = false;
  }

  onColumnClicked(column: any, data: boolean, event: MouseEvent) {
    if (event.ctrlKey && column.editable) {
      this.value = data;
      this.canEdit = true;
    }
  }
}
