import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { cloneDeep } from 'lodash';
import { CheckIconComponent } from '../../../svg-icon/check-icon/check-icon.component';
import { CloseIconComponent } from '../../../svg-icon/close-icon/close-icon.component';
// import { NiraSnackBarService } from 'nira-snack-bar';

@Component({
  selector: 'rp-table-number-column',
  templateUrl: './rp-table-number-column.component.html',
  styleUrls: ['./rp-table-number-column.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, CheckIconComponent, CloseIconComponent],
})
export class RpTableNumberColumnComponent {
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
