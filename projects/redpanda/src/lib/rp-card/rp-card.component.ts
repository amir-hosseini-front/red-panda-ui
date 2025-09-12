import { Component, Input } from '@angular/core';

@Component({
  selector: 'rp-card',
  standalone: true,
  imports: [],
  templateUrl: './rp-card.component.html',
  styleUrl: './rp-card.component.css',
})
export class RpCardComponent {
  @Input() cardClass = 'bg-white';
}
