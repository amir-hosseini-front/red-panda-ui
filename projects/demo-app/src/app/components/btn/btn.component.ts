import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialog } from '../../../../../redpanda/src/lib/redpandaTypes';
import { RpButtonComponent } from '../../../../../redpanda/src/lib/rp-button/rp-button.component';
import { MoveToInboxIconComponent } from '../../svg-icons/move-to-inbox-icon/move-to-inbox-icon.component';
import { RpCardComponent } from '../../../../../redpanda/src/lib/rp-card/rp-card.component';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [
    RpButtonComponent,
    RpCardComponent,
    MoveToInboxIconComponent,
    CommonModule,
  ],
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.scss',
})
export class BtnComponent {
  confirmDelete: ConfirmDialog = {
    cancelBtn: 'Close',
    confirmBtn: 'Delete',
    text: 'Are you sure about deleting?',
    title: 'Delete Item ',
  };

  onClick(event: any) {}
}
