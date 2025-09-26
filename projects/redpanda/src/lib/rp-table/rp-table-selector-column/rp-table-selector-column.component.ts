import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { cloneDeep } from 'lodash';
import { RpSelectorComponent } from '../../rp-selector/rp-selector.component';
import { CloseIconComponent } from '../../../svg-icon/close-icon/close-icon.component';
import { CheckIconComponent } from '../../../svg-icon/check-icon/check-icon.component';
import { SnackbarService } from '../../rp-snack-bar/rp-snack-bar.service';
// import { NiraSnackBarService } from 'nira-snack-bar';

@Component({
  selector: 'rp-table-selector-column',
  templateUrl: './rp-table-selector-column.component.html',
  styleUrls: ['./rp-table-selector-column.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RpSelectorComponent,
    CloseIconComponent,
    CheckIconComponent,
  ],
})
export class RpTableSelectorColumnComponent {
  @Input({ required: true }) data!: any;
  @Input({ required: true }) column!: any;
  @Output() onColumnValueChanged: EventEmitter<any> = new EventEmitter();

  canEdit = false;
  value: any;

  constructor(private snackbarService: SnackbarService) {}

  onChange(event: any) {
    this.value = event;
  }

  setValue() {
    const newData = cloneDeep(this.data);
    newData[this.column.key] = this.value;
    this.onColumnValueChanged.emit(newData);
    this.canEdit = false;
  }

  onTextColumnClicked(column: any, data: string, event: MouseEvent) {
    if (event.ctrlKey && column.editable) {
      this.value = data;
      this.canEdit = true;
    } else if (column.copyToClipboard) {
      navigator.clipboard
        .writeText(data)
        .then((e) => {
          this.snackbarService.show({
            message: 'Copy was successful.',
            type: 'success',
            duration: 5000,
          });
        })
        .catch((e) => console.error(e));
    }
  }

  getSelectorData(data: any, key: string) {
    if (!key) {
      return '';
    }
    const split = key.split('.');
    if (split.length === 1) {
      return data[key];
    } else {
      let newData = data;
      split.forEach((newKey) => {
        newData = newData[newKey];
      });

      return newData;
    }
  }
}
