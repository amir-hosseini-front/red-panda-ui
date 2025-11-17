import { Component } from '@angular/core';
import { RpModalComponent } from '../../../../../redpanda/src/lib/rp-modal/rp-modal.component';
import { RpCardComponent } from '../../../../../redpanda/src/lib/rp-card/rp-card.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [RpModalComponent, RpCardComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  isModalOpen = false;

  closeDemoModal() {
    this.isModalOpen = true;
  }
}
