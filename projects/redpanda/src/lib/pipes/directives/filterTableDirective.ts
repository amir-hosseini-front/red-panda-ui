import {
  Directive,
  ViewContainerRef,
  HostListener,
  ElementRef,
  Input,
  ComponentRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { CoreTableFilterDialogComponent } from '../../rp-table/core-table-filter-dialog/core-table-filter-dialog/core-table-filter-dialog.component';
// import { NiraModalService } from 'nira-modal';

@Directive({
  selector: '[filterTable]',
})
export class FilterTableDirective {
  constructor(
    public viewContainerRef: ViewContainerRef,
    // private niraModalService: NiraModalService,
    private el: ElementRef
  ) {}

  @Input({ required: true }) columnsSchema: any;
  @Input({ required: false }) key: string | undefined;

  @HostListener('click', ['$event.target']) onClick() {
    this.openFilterDialog();
  }

  openFilterDialog() {
    // this.niraModalService.open(CoreTableFilterDialogComponent, {
    //   data: { columnsSchema: this.columnsSchema, key: this.key },
    // });
  }
}
