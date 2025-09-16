import { Component, Input } from '@angular/core';
import { EditSquareIconComponent } from '../../../svg-icon/edit-square-icon/edit-square-icon.component';
// import { NiraModalService } from 'nira-modal';

@Component({
  selector: 'rp-table-action-column',
  templateUrl: './rp-table-action-column.component.html',
  styleUrls: ['./rp-table-action-column.component.scss'],
  standalone: true,
  imports: [EditSquareIconComponent],
})
export class RpTableActionColumnComponent {
  @Input({ required: true }) data!: any;
  @Input({ required: true }) column!: any;
  // constructor(private niraModalService: NiraModalService) {}

  openDialog() {
    // this.niraModalService.open(this.column.data.component, {
    //   data: this.data[this.column.data.key],
    // });
  }
}
