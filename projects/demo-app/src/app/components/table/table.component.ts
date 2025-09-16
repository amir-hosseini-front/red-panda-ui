import { Component } from '@angular/core';
import { RpCardComponent } from '../../../../../redpanda/src/lib/rp-card/rp-card.component';
import { RpTableComponent } from '../../../../../redpanda/src/lib/rp-table/rp-table/rp-table.component';
import { BehaviorSubject } from 'rxjs';
import { ColumnsSchema } from '../../../../../redpanda/src/lib/rp-table/rp-table/rp-table.type';
import { COLUMNS_TYPES } from '../../../../../redpanda/src/lib/redpandaTypes';
import { CloseIconComponent } from '../../../../../redpanda/src/svg-icon/close-icon/close-icon.component';
import { NgxIndexedDBModule } from 'ngx-indexed-db';

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
  tableData: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  columnsSchema: ColumnsSchema[] = [
    {
      key: 'row',
      type: COLUMNS_TYPES.NUMBER,
      label: 'Row',
      copyToClipboard: true,
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
          component: CloseIconComponent,
        },
      ],
    },
  ];

  ngOnInit(): void {
    this.tableData.next([
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
        status: false,
      },
      {
        row: 3,
        fullName: 'Amin Hosseini',
        phoneNumber: '0916273945',
        date: '1991-02-25',
        status: false,
      },
    ]);
  }

  columnValueChanged(data: any) {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      const allData = this.tableData.getValue();
      const index = allData.findIndex((item) => item.id === data.id);
      if (index > -1) allData[index] = data;
      this.tableData.next(allData);
    }, 3000);
  }
}
