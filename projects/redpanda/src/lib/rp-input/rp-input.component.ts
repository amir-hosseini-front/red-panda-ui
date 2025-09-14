import {
  Component,
  EventEmitter,
  Input,
  Optional,
  Output,
  Self,
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'rp-input',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './rp-input.component.html',
  styleUrl: './rp-input.component.css',
})
export class RpInputComponent implements ControlValueAccessor {
  _errorMessages: { type: string; message: string }[] = [
    { type: 'required', message: 'Email is required' },
    { type: 'email', message: 'Please enter a valid email' },
  ];
  @Input() label: string = '';
  @Input() defaultValue: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() set errorMessages(
    value: { type: string; pattern?: string; message: string }[]
  ) {
    this._errorMessages = this._errorMessages.concat(value);
  }
  @Input() disabled = false;
  @Output() onChange: EventEmitter<string> = new EventEmitter();
  value: string = '';
  get formControl(): FormControl {
    return (this.control?.control as FormControl) ?? null;
  }
  constructor(@Self() @Optional() public control: NgControl) {
    if (control) {
      control.valueAccessor = this;
    }
  }

  ngOnInit(): void {
    this.value = this.defaultValue;
  }
  writeValue(obj: any): void {}
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  onBlur() {
    console.log(this.formControl);
    if (this.formControl && !this.formControl.errors) {
      this.onChange.emit(this.formControl.value);
    } else {
      this.onChange.emit(this.value);
    }
  }
  get errorMassage(): { type: string; message: string } | undefined {
    if (this.control.errors) {
      if (Object.keys(this.control.errors).length != 0) {
        let errorMessage;
        Object.keys(this.control.errors).filter((key) => {
          errorMessage = this._errorMessages.find((error) => error.type == key);
        });
        return errorMessage;
      } else {
        return undefined;
      }
    } else {
      return undefined;
    }
  }
}
