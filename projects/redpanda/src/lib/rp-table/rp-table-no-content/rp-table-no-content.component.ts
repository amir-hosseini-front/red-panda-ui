import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarningIconComponent } from '../../../svg-icon/warning-icon/warning-icon.component';

@Component({
  selector: 'rp-table-no-content',
  templateUrl: './rp-table-no-content.component.html',
  styleUrls: ['./rp-table-no-content.component.scss'],
  standalone: true,
  imports: [CommonModule, WarningIconComponent],
})
export class RpTableNoContentComponent {
  @Input({ required: true }) tableData: any;
  @Input({ required: false }) loading: any;
  constructor() {}
}
