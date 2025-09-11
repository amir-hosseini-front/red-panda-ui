import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  ButtonSize,
  ButtonType,
  Color,
  ColorState,
  ConfirmDialog,
  ThemePalette,
} from '../redpandaTypes';
import { FormGroup } from '@angular/forms';
import { RpSpinnerComponent } from '../rp-spinner/rp-spinner.component';
import { RpModalComponent } from '../rp-modal/rp-modal.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'rp-button',
  standalone: true,
  imports: [RpSpinnerComponent, RpModalComponent, CommonModule],
  templateUrl: './rp-button.component.html',
  styleUrl: './rp-button.component.scss',
})
export class RpButtonComponent {
  disable = false;
  openConfirmDialog = false;
  @Input() formGroup: FormGroup | undefined = undefined;
  @Input() loading: boolean = false;
  @Input() theme: ThemePalette = 'square';
  @Input() buttonType: ButtonType = 'button';
  @Input() size: ButtonSize = 'small';
  @Input() color: Color = 'White';
  @Input() set isDisabled(value: boolean) {
    this.disable = value;
  }
  @Input() colorState: ColorState = 'default';
  @Output() btnClicked: EventEmitter<any> = new EventEmitter();
  @Input() confirmDialog: ConfirmDialog | undefined = undefined;
  constructor() {}
  clicked() {
    if (!this.disable) {
      if (this.confirmDialog != undefined) {
        this.openConfirmDialog = true;
      } else {
        this.btnClicked.emit();
      }
    }
    if (this.formGroup) {
      this.formGroup.markAllAsTouched();
    }
  }
  close() {
    this.openConfirmDialog = false;
  }
  confirm() {
    this.btnClicked.emit();
  }
}
