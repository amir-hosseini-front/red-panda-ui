import {
  Component,
  CSP_NONCE,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
// import { NiraSnackBarService } from 'nira-snack-bar';
import { BehaviorSubject } from 'rxjs';
import { COLUMNS_TYPES } from '../../redpandaTypes';
import { CommonModule } from '@angular/common';
import { RpTableRowSelectorColumnComponent } from '../rp-table-row-selector-column/rp-table-row-selector-column.component';
import { RpTableStatusActiveColumnComponent } from '../rp-table-status-active-column/rp-table-status-active-column.component';
import { RpTableColorColumnComponent } from '../rp-table-color-column/rp-table-color-column.component';
import { RpTableStatusColumnComponent } from '../rp-table-status-column/rp-table-status-column.component';
import { RpTableActionColumnComponent } from '../rp-table-action-column/rp-table-action-column.component';
import { RpTableActionButtonsColumnComponent } from '../rp-table-action-buttons-column/rp-table-action-buttons-column.component';
import { RpTableShamsiDateComponent } from '../rp-table-shamsi-date/rp-table-shamsi-date.component';
import { RpTableDateComponent } from '../rp-table-date/rp-table-date.component';
import { SnackbarService } from '../../rp-snack-bar/rp-snack-bar.service';

@Component({
  selector: 'rp-table-card-manager',
  templateUrl: './rp-table-card-manager.component.html',
  styleUrls: ['./rp-table-card-manager.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RpTableRowSelectorColumnComponent,
    RpTableStatusActiveColumnComponent,
    RpTableColorColumnComponent,
    RpTableStatusColumnComponent,
    RpTableActionColumnComponent,
    RpTableActionButtonsColumnComponent,
    RpTableShamsiDateComponent,
    RpTableDateComponent,
  ],
})
export class RpTableCardManagerComponent {
  @Input({ required: true }) data!: any;
  @Input({ required: true }) column!: any;
  @Input({ required: true }) allTableData!: any;
  @Input({ required: false }) rowSelector: BehaviorSubject<any> | undefined =
    undefined;
  @Output() onColumnClicked: EventEmitter<any> = new EventEmitter();
  get columnsTypes() {
    return COLUMNS_TYPES;
  }
  constructor(private snackbarService: SnackbarService) {}
  getSelectorData(data: any, key: string) {
    if (key) {
      const split = key.split('.');
      if (split.length === 1) {
        return data[key];
      } else {
        let newData = data;
        split.forEach((newKay) => {
          newData = newData[newKay];
        });

        return newData;
      }
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
  combinedData(detailViewer: any, data: any) {
    return {
      detailViewer: detailViewer,
      data: data,
    };
  }
}
