import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputType } from '../../redpandaTypes';
import { CommonModule } from '@angular/common';
import { CloseIconComponent } from '../../../svg-icon/close-icon/close-icon.component';
import { SearchIconComponent } from '../../../svg-icon/search-icon/search-icon.component';
import { CalendarIconComponent } from '../../../svg-icon/calendar-icon/calendar-icon.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'rp-column-input',
  templateUrl: './rp-column-input.component.html',
  styleUrls: ['./rp-column-input.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    SearchIconComponent,
    CalendarIconComponent,
    FormsModule,
  ],
})
export class RpColumnInputComponent {
  inputType!: InputType;
  @Input() showRemoveIcon: boolean = true;
  @Input() placeholder = '';
  @Output() onChange: EventEmitter<string> = new EventEmitter();
  @Input() value: string = '';
  @Input() set type(value: InputType) {
    this.inputType = value;
  }
  @Input() isDatePicker: boolean = false;
  @Input() maxLength = 2000;
  change(event: any) {
    this.onChange.emit(event);
  }
}
