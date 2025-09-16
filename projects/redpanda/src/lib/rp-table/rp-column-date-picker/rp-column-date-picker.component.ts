import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RpInputComponent } from '../../rp-input/rp-input.component';
import { RpColumnInputComponent } from '../rp-column-input/rp-column-input.component';
import { CloseIconComponent } from '../../../svg-icon/close-icon/close-icon.component';

@Component({
  selector: 'rp-column-date-picker',
  templateUrl: './rp-column-date-picker.component.html',
  styleUrls: ['./rp-column-date-picker.component.scss'],
  standalone: true,
  imports: [CommonModule, RpColumnInputComponent, CloseIconComponent],
})
export class CoreColumnDatePickerComponent {
  @Input() canSelectToday: boolean = false;
  @Input() defaultDate: string = '';
  @Input() inputFormControl: FormControl = new FormControl('', []);

  @Output() onChange: EventEmitter<any> = new EventEmitter();
  niraDatePickerForm: FormGroup = {} as FormGroup;
  isOpenCalendar: boolean = false;
  date: string = '';
  constructor(private changeDetectorRef: ChangeDetectorRef) {}
  ngOnInit(): void {
    this.niraDatePickerForm = new FormGroup({
      niraDatePickerFormCtrl: this.inputFormControl,
    });
  }

  ngAfterViewInit(): void {
    this.changeDetectorRef.detectChanges();
  }

  clearedText() {
    this.niraDatePickerForm.setValue({
      niraDatePickerFormCtrl: '',
    });
    this.date = '';
    this.onChange.emit(undefined);
  }
  onDatePickerResult(result: string) {
    this.niraDatePickerForm.setValue({
      niraDatePickerFormCtrl: result,
    });
    this.date = result;
    this.onChange.emit(result);
  }
  onTodayDate(todayDate: string) {
    this.date = todayDate;
    this.niraDatePickerForm.setValue({
      niraDatePickerFormCtrl: todayDate,
    });
  }
}
