import { Component } from '@angular/core';
import { RpCardComponent } from '../../../../../redpanda/src/lib/rp-card/rp-card.component';
import { RpSpinnerComponent } from '../../../../../redpanda/src/lib/rp-spinner/rp-spinner.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [RpCardComponent, RpSpinnerComponent, CommonModule],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss',
})
export class SpinnerComponent {
  loading = true;

  ngOnInit(): void {}
}
