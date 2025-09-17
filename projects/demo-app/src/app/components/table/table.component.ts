import { Component } from '@angular/core';
import { RpCardComponent } from '../../../../../redpanda/src/lib/rp-card/rp-card.component';
import { RpTableComponent } from '../../../../../redpanda/src/lib/rp-table/rp-table/rp-table.component';
import { BehaviorSubject } from 'rxjs';
import { ColumnsSchema } from '../../../../../redpanda/src/lib/rp-table/rp-table/rp-table.type';
import { COLUMNS_TYPES } from '../../../../../redpanda/src/lib/redpandaTypes';
import { CloseIconComponent } from '../../../../../redpanda/src/svg-icon/close-icon/close-icon.component';
import { NgxIndexedDBModule } from 'ngx-indexed-db';
import { EditSquareIconComponent } from '../../../../../redpanda/src/svg-icon/edit-square-icon/edit-square-icon.component';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [RpCardComponent, RpTableComponent],
  providers: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  loading = false;
  tab = 'ts';
  tableData: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([
    {
      row: 1,
      fullName: 'Amir Hosseini',
      phoneNumber: '0916273945',
      date: '1993-02-25',
      status: false,
    },
    {
      row: 2,
      fullName: 'Ahmad Haeri',
      phoneNumber: '0916273945',
      date: '1991-02-25',
      status: true,
    },
    {
      row: 3,
      fullName: 'Amin Hosseini',
      phoneNumber: '0916273945',
      date: '1991-02-25',
      status: false,
    },
  ]);
  tableDataEditable: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([
    {
      row: 1,
      fullName: 'Amir Hosseini',
      phoneNumber: '0916273945',
      date: '1993-02-25',
      status: false,
    },
    {
      row: 2,
      fullName: 'Ahmad Haeri',
      phoneNumber: '0916273945',
      date: '1991-02-25',
      status: true,
    },
    {
      row: 3,
      fullName: 'Amin Hosseini',
      phoneNumber: '0916273945',
      date: '1991-02-25',
      status: false,
    },
  ]);
  columnsSchema: ColumnsSchema[] = [
    {
      key: 'row',
      type: COLUMNS_TYPES.NUMBER,
      label: 'Row',
      copyToClipboard: true,
    },
    {
      key: 'fullName',
      type: COLUMNS_TYPES.TEXT,
      label: 'FullName',
    },
    {
      key: 'phoneNumber',
      type: COLUMNS_TYPES.TEXT,
      label: 'PhoneNumber',
    },

    {
      key: 'date',
      type: COLUMNS_TYPES.DATE,
      label: 'Date',
    },
    {
      key: 'status',
      type: COLUMNS_TYPES.STATUS,
      label: 'Status',
    },
    {
      key: 'action',
      type: COLUMNS_TYPES.ACTION_BUTTONS,
      label: 'Actin',
      data: [
        {
          key: 'asd',
          title: 'title',
          component: EditSquareIconComponent,
        },
      ],
    },
  ];
  columnsSchemaEditable: ColumnsSchema[] = [
    {
      key: 'row',
      type: COLUMNS_TYPES.NUMBER,
      label: 'Row',
      editable: true,
    },
    {
      key: 'fullName',
      type: COLUMNS_TYPES.TEXT,
      label: 'FullName',
      editable: true,
    },
    {
      key: 'phoneNumber',
      type: COLUMNS_TYPES.TEXT,
      label: 'PhoneNumber',
      editable: true,
    },

    {
      key: 'date',
      type: COLUMNS_TYPES.DATE,
      label: 'Date',
      editable: true,
    },
    {
      key: 'status',
      type: COLUMNS_TYPES.STATUS,
      label: 'Status',
      editable: true,
    },
    {
      key: 'action',
      type: COLUMNS_TYPES.ACTION_BUTTONS,
      label: 'Actin',
      data: [
        {
          key: 'asd',
          title: 'title',
          component: EditSquareIconComponent,
        },
      ],
    },
  ];

  columnValueChanged(data: any) {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      const items = cloneDeep(this.tableDataEditable.getValue());
      const index = items.findIndex((item) => item.row === data.row);
      if (index > -1) items[index] = data;
      this.tableDataEditable.next(items);
    }, 500);
  }
}
