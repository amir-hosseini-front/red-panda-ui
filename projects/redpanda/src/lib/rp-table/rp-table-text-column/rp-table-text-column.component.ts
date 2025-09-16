import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { cloneDeep } from 'lodash';
import { CloseIconComponent } from '../../../svg-icon/close-icon/close-icon.component';
import { CheckIconComponent } from '../../../svg-icon/check-icon/check-icon.component';
// import { NiraSnackBarService } from 'nira-snack-bar';

@Component({
  selector: 'rp-table-text-column',
  templateUrl: './rp-table-text-column.component.html',
  styleUrls: ['./rp-table-text-column.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, CloseIconComponent, CheckIconComponent],
})
export class RpTableTextColumnComponent {
  @Input({ required: true }) data!: any;
  @Input({ required: true }) column!: any;
  @Output() onColumnValueChanged: EventEmitter<any> = new EventEmitter();

  canEdit = false;
  value = '';

  // constructor(private niraSnackBar: NiraSnackBarService) {}

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
          // this.niraSnackBar.show('با موفقیت کپی شد', {
          //   statusClass: 'success',
          //   duration: 3000,
          // });
        })
        .catch((e) => console.error(e));
    }
  }
}
