import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ColumnsSchema } from './rp-table.type';
import { COLUMNS_TYPES } from '../../redpandaTypes';
import { ACTIVE_OPTIONS, YES_NO_OPTIONS } from '../../utils/constants';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Util } from '../../utils/util';
import { orderBy } from 'lodash';
import { SortDownIconComponent } from '../../../svg-icon/sort-down-icon/sort-down-icon.component';
import { SortUpIconComponent } from '../../../svg-icon/sort-up-icon/sort-up-icon.component';
import { SortSolidIconComponent } from '../../../svg-icon/sort-solid-icon/sort-solid-icon.component';
import { RpColumnInputComponent } from '../rp-column-input/rp-column-input.component';
import { RpColumnSelectorComponent } from '../rp-column-selector/rp-column-selector.component';
import { RpTableColumnManagerComponent } from '../rp-table-column-manager/rp-table-column-manager.component';
import { RpCardComponent } from '../../rp-card/rp-card.component';
import { RpTableCardManagerComponent } from '../rp-table-card-manager/rp-table-card-manager.component';
import { RpTableNoContentComponent } from '../rp-table-no-content/rp-table-no-content.component';

@Component({
  selector: 'rp-table',
  standalone: true,
  imports: [
    CommonModule,
    SortDownIconComponent,
    SortUpIconComponent,
    SortSolidIconComponent,
    RpColumnInputComponent,
    RpColumnSelectorComponent,
    RpTableColumnManagerComponent,
    RpCardComponent,
    RpTableCardManagerComponent,
    RpTableNoContentComponent,
  ],
  providers: [NgxIndexedDBService],
  templateUrl: './rp-table.component.html',
  styleUrl: './rp-table.component.scss',
})
export class RpTableComponent {
  @Input({ required: false }) key: string | undefined;
  @Input({ required: true }) columnsSchema: ColumnsSchema[] = [];
  @Input({ required: true }) tableData: BehaviorSubject<any[]> =
    new BehaviorSubject<any[]>([]);
  @Input({ required: false }) responsive: boolean = true;
  @Input({ required: true }) loading: any;
  @Input() canFilter: boolean = false;
  @Input({ required: false }) styleFilter: ((data: any) => string) | undefined;
  @Input({ required: false }) rowSelector: BehaviorSubject<any> | undefined =
    undefined;
  @Output() onColumnClicked: EventEmitter<any> = new EventEmitter();
  @Output() onColumnValueChanged: EventEmitter<any> = new EventEmitter();
  ACTIVE_OPTIONS = ACTIVE_OPTIONS;
  YES_NO_OPTIONS = YES_NO_OPTIONS;
  sortDetail: { key: string; sort: 'asc' | 'desc' } | undefined;
  sortedTableData: any[] = [];
  dbTableFilter: any;
  get columnsTypes() {
    return COLUMNS_TYPES;
  }
  get isRunningOnSmallScreen() {
    return Util.isRunningOnSmallScreen();
  }
  constructor(private dbService: NgxIndexedDBService) {}

  ngOnInit(): void {
    this.tableData.subscribe((val: any) => {
      this.sortedTableData = val;
    });
    if (this.key) {
      this.dbService
        .getByIndex('tableFilter', 'key', this.key)
        .subscribe((data: any) => {
          this.dbTableFilter = data;
          if (this.dbTableFilter) {
            this.setTableFilter();
          }
        });
    }
  }
  setTableFilter() {
    this.columnsSchema.map((column: any) => {
      JSON.parse(this.dbTableFilter.columnsSchema).forEach(
        (dbColumnsSchema: any) => {
          if (dbColumnsSchema.key === column.key) {
            column.active = dbColumnsSchema.active;
          }
        }
      );
      return column;
    });
  }

  columnClicked(val: any) {
    this.onColumnClicked.emit(val);
  }
  columnValueChanged(val: any) {
    this.onColumnValueChanged.emit(val);
  }
  sortByHeader(column: any) {
    if (this.sortDetail && this.sortDetail.key == column.key) {
      if (this.sortDetail.sort == 'desc') {
        this.sortDetail = { key: column.key, sort: 'asc' };
      } else {
        this.sortDetail = { key: column.key, sort: 'desc' };
      }
    } else {
      this.sortDetail = { key: column.key, sort: 'asc' };
    }
    if (
      column.type == COLUMNS_TYPES.TEXT ||
      column.type == COLUMNS_TYPES.NUMBER
    ) {
      this.sortedTableData = orderBy(
        this.sortedTableData,
        [column.key],
        [this.sortDetail.sort]
      );
    } else if (column.type == COLUMNS_TYPES.SELECTOR) {
      this.sortedTableData = orderBy(
        this.sortedTableData,
        [(c) => c[column.key][column.data.key]],
        [this.sortDetail.sort]
      );
    } else if (column.type == COLUMNS_TYPES.SHAMSI_DATE) {
      this.sortedTableData = orderBy(
        this.sortedTableData,
        [(c) => new Date(c[column.key]).getTime()],
        [this.sortDetail.sort]
      );
    }
  }

  activeColumnsSchema(): any[] {
    return this.columnsSchema.filter(
      (column: any) => column.active === undefined || column.active
    );
  }

  tableDataFiltered(text: String | boolean, column: any) {
    this.columnsSchema.map((columnSchema: any) => {
      if (columnSchema.key === column.key) {
        columnSchema.columnFilter = text;
      }
      return columnSchema;
    });
    this.tableData.subscribe((tableData) => {
      this.sortedTableData = tableData.filter((data: any) => {
        let result = true;
        this.columnsSchema.forEach((columnSchema: any) => {
          if (
            columnSchema.type === this.columnsTypes.ROW_SELECTOR ||
            columnSchema.type === this.columnsTypes.ACTION ||
            columnSchema.type === this.columnsTypes.ACTION_BUTTONS ||
            columnSchema.columnFilter === undefined ||
            !result
          ) {
            return;
          }
          if (columnSchema.type === this.columnsTypes.SELECTOR) {
            result = data[columnSchema.key][columnSchema.data.key]
              .toLowerCase()
              .includes(columnSchema.columnFilter.toString().toLowerCase());
          } else if (columnSchema.type === this.columnsTypes.SHAMSI_DATE) {
            if (columnSchema.columnFilter === '') {
              result = true;
            } else {
              result = data[columnSchema.key]
                .toLowerCase()
                .includes(columnSchema.columnFilter.toString());
            }
          } else if (columnSchema.type === this.columnsTypes.MULTI_COLUMN) {
            result = columnSchema.columns.some((item: any) => {
              return data[item.key][item.data.key]
                .toLowerCase()
                .includes(columnSchema.columnFilter?.toString()?.toLowerCase());
            });
          } else if (columnSchema.type === this.columnsTypes.STATUS) {
            if (columnSchema.columnFilter === '') {
              result = true;
            } else {
              result = data[columnSchema.key] === columnSchema.columnFilter;
            }
          } else {
            result = data[columnSchema.key]
              .toString()
              .toLowerCase()
              .includes(columnSchema.columnFilter?.toString()?.toLowerCase());
          }
        });
        return result;
      });
    });
  }
}
