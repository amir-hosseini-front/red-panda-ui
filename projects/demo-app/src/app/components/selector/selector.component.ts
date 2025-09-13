import { Component } from '@angular/core';
import { RpSelectorComponent } from '../../../../../redpanda/src/lib/rp-selector/rp-selector.component';
import { RpCardComponent } from '../../../../../redpanda/src/lib/rp-card/rp-card.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormControlPipe } from '../../../../../redpanda/src/lib/pipes/form-control.pipe';

type IGender = {
  value: string;
  title: string;
};
@Component({
  selector: 'app-selector',
  standalone: true,
  imports: [
    RpSelectorComponent,
    RpCardComponent,
    CommonModule,
    FormControlPipe,
  ],
  templateUrl: './selector.component.html',
  styleUrl: './selector.component.scss',
})
export class SelectorComponent {
  selectItem: IGender | undefined = undefined;
  gender: BehaviorSubject<IGender[]> = new BehaviorSubject<IGender[]>([
    { value: 'M', title: 'Male' },
    { value: 'F', title: 'Female' },
    { value: 'FA', title: 'Family' },
  ]);
  defaultValue = 'M';
  form: FormGroup = new FormGroup({
    city: new FormControl('', []),
    gender: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
  });
}
