import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { NiraSnackBarService } from 'nira-snack-bar';
import { BehaviorSubject } from 'rxjs';
import { COLUMNS_TYPES } from '../../redpandaTypes';
import { CommonModule } from '@angular/common';
import { RpTableRowSelectorColumnComponent } from '../rp-table-row-selector-column/rp-table-row-selector-column.component';
import { RpTableStatusActiveColumnComponent } from '../rp-table-status-active-column/rp-table-status-active-column.component';
import { RpTableStatusColumnComponent } from '../rp-table-status-column/rp-table-status-column.component';
import { RpTableActionColumnComponent } from '../rp-table-action-column/rp-table-action-column.component';
import { RpTableActionButtonsColumnComponent } from '../rp-table-action-buttons-column/rp-table-action-buttons-column.component';
import { RpTableShamsiDateComponent } from '../rp-table-shamsi-date/rp-table-shamsi-date.component';
import { RpTableDateComponent } from '../rp-table-date/rp-table-date.component';
import { RpTableColorColumnComponent } from '../rp-table-color-column/rp-table-color-column.component';
import { RpTableTextColumnComponent } from '../rp-table-text-column/rp-table-text-column.component';
import { RpTableNumberColumnComponent } from '../rp-table-number-column/rp-table-number-column.component';
import { RpTableSelectorColumnComponent } from '../rp-table-selector-column/rp-table-selector-column.component';
import { SnackbarService } from '../../rp-snack-bar/rp-snack-bar.service';

@Component({
  selector: 'rp-table-column-manager',
  templateUrl: './rp-table-column-manager.component.html',
  styleUrls: ['./rp-table-column-manager.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RpTableRowSelectorColumnComponent,
    RpTableStatusActiveColumnComponent,
    RpTableStatusColumnComponent,
    RpTableActionColumnComponent,
    RpTableActionButtonsColumnComponent,
    RpTableShamsiDateComponent,
    RpTableDateComponent,
    RpTableColorColumnComponent,
    RpTableTextColumnComponent,
    RpTableNumberColumnComponent,
    RpTableSelectorColumnComponent,
  ],
})
export class RpTableColumnManagerComponent {
  @Input({ required: true }) data!: any;
  @Input({ required: true }) column!: any;
  @Input({ required: true }) allTableData!: any;
  @Input({ required: false }) rowSelector: BehaviorSubject<any> | undefined =
    undefined;
  @Output() onColumnClicked: EventEmitter<any> = new EventEmitter();
  @Output() onColumnValueChanged: EventEmitter<any> = new EventEmitter();

  get columnsTypes() {
    return COLUMNS_TYPES;
  }
  constructor(private snackbarService: SnackbarService) {}
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
  onTextColumnClicked(column: any, data: string) {
    if (!column.copyToClipboard) return;
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
  clicked(val: any) {
    this.onColumnClicked.emit(val);
  }
  columnValueChanged(val: any) {
    this.onColumnValueChanged.emit(val);
  }
  combinedData(detailViewer: any, data: any) {
    return {
      detailViewer: detailViewer,
      data: data,
    };
  }
}
