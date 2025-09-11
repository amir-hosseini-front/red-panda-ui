import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RpInputComponent } from '../../../../../redpanda/src/lib/rp-input/rp-input.component';
import {
  FormGroup,
  NonNullableFormBuilder,
  Validators,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RpInputComponent],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  password = '656565';
  form: FormGroup<{
    email: FormControl<string>;
    name: FormControl<string>;
    phone: FormControl<string>;
    code: FormControl<string>;
  }>;
  constructor(private fb: NonNullableFormBuilder) {
    this.form = this.fb.group({
      email: this.fb.control('', {
        validators: [Validators.required, Validators.email],
      }),
      name: this.fb.control('', {
        validators: [Validators.required],
      }),
      phone: this.fb.control('', {
        validators: [Validators.required],
      }),
      code: this.fb.control(
        { value: '', disabled: true },
        {
          validators: [Validators.required],
        }
      ),
    });
  }

  ngOnInit(): void {}
}
