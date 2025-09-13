import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RpRadioButtonsComponent } from '../../../../../redpanda/src/lib/rp-radio-buttons/rp-radio-buttons.component';
import { CommonModule } from '@angular/common';
import { RpCardComponent } from '../../../../../redpanda/src/lib/rp-card/rp-card.component';

@Component({
  selector: 'app-radio-buttons',
  standalone: true,
  imports: [RpRadioButtonsComponent, RpCardComponent, CommonModule],
  templateUrl: './radio-buttons.component.html',
  styleUrl: './radio-buttons.component.scss',
})
export class RadioButtonsComponent {
  getFromDestinationList = [
    { value: 'RadioButton1', title: 'Radio button 1' },
    { value: 'RadioButton2', title: 'Radio button 2' },
    { value: 'RadioButton3', title: 'Radio button 3' },
  ];
  getFromDestinationFilterList: BehaviorSubject<any[]> = new BehaviorSubject<
    any[]
  >(this.getFromDestinationList);

  value = '';

  onChange(value: string) {
    this.value = value;
  }
}
