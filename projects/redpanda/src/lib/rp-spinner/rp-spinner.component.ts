import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorState } from '../redpandaTypes';

@Component({
  selector: 'rp-spinner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rp-spinner.component.html',
  styleUrl: './rp-spinner.component.scss',
})
export class RpSpinnerComponent {
  @Input() size: number = 24;
  @Input() color: ColorState = 'default';
  @Input() type: 'circle' | 'line' = 'circle';
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.color);
  }
}
