import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'rp-table-row-selector-column',
  templateUrl: './rp-table-row-selector-column.component.html',
  styleUrls: ['./rp-table-row-selector-column.component.scss'],
  standalone: true,
  imports: [],
})
export class RpTableRowSelectorColumnComponent {
  checked = false;
  @Input({ required: true }) data!: any;
  @Input({ required: true }) column!: any;
  @Input({ required: true }) allTableData!: any;
  @Input({ required: false }) rowSelector: BehaviorSubject<any> | undefined =
    undefined;

  ngOnInit() {
    this.rowSelector?.subscribe((data: any[]) => {
      const index = data.findIndex((item) => item.id === this.data.id);
      this.checked = index >= 0;
    });
  }

  change(event: any) {
    let rowSelector: any[] = this.rowSelector?.getValue();
    if (event.srcElement.checked) {
      rowSelector = [...rowSelector, this.data];
    } else {
      const index = rowSelector.findIndex((item) => this.data.id === item.id);
      rowSelector.splice(index, 1);
    }
    this.rowSelector?.next(rowSelector);
  }
  async oncontextmenu(event: any) {
    if (!this.column.data.key) return;
    event.preventDefault();
    let rowSelector: any[] = this.rowSelector?.getValue();
    if (!event.srcElement.checked) {
      const others = this.allTableData.filter(
        (data: any) =>
          data[this.column.data.key] === this.data[this.column.data.key]
      );
      for await (const row of others) {
        const index = rowSelector.findIndex((item) => row.id === item.id);
        if (!(index >= 0)) {
          rowSelector = [...rowSelector, row];
        }
      }
    } else {
      const others = rowSelector.filter(
        (item) => this.data[this.column.data.key] === item[this.column.data.key]
      );
      for await (const row of others) {
        const index = rowSelector.findIndex((item) => row.id === item.id);
        rowSelector.splice(index, 1);
      }
    }
    this.rowSelector?.next(rowSelector);
  }
}
