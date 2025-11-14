import { Component } from '@angular/core';
import { RpCardComponent } from '../../../../../redpanda/src/lib/rp-card/rp-card.component';

@Component({
  selector: 'app-installation',
  standalone: true,
  imports: [RpCardComponent],
  templateUrl: './installation.component.html',
  styleUrl: './installation.component.scss',
})
export class InstallationComponent {}
