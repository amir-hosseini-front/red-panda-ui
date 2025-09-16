import { Component, Input } from '@angular/core';
import { CaretUpIconComponent } from '../../../svg-icon/caret-up-icon/caret-up-icon.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'rp-table-detail-viewer-for-report',
  templateUrl: './rp-table-detail-viewer-for-report.component.html',
  styleUrls: ['./rp-table-detail-viewer-for-report.component.scss'],
  standalone: true,
  imports: [CaretUpIconComponent, CommonModule],
})
export class RpTableDetailViewerForReportComponent {
  @Input({ required: true }) data!: any;
  @Input({ required: true }) column!: any;

  get detailViewers() {
    return this.column.data.detailViewers;
  }

  ngOnInit(): void {}

  hasDetailViewers() {
    return this.detailViewers.some(
      (item: any) => item === this.data[this.column.data.keyType]
    );
  }

  onClick() {
    this.column.data.onClick(this.data);
  }
}
