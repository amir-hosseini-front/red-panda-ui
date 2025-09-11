import { Component } from '@angular/core';
import { RpModalComponent } from '../../../../../redpanda/src/lib/rp-modal/rp-modal.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [RpModalComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  isModalOpen = false;
}
