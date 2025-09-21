import { Component, OnInit } from '@angular/core';
import { SnackbarData, SnackbarService } from './rp-snack-bar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'rp-snack-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rp-snack-bar.component.html',
  styleUrls: ['./rp-snack-bar.component.scss'],
})
export class SnackbarComponent {
  isVisible = false;
  message = '';
  type: SnackbarData['type'] = 'info';
  actionLabel?: string;
  actionCallback?: () => void;

  open(data: SnackbarData) {
    this.message = data.message;
    this.type = data.type || 'info';
    this.actionLabel = data.action?.label;
    this.actionCallback = data.action?.callback;

    this.isVisible = true;

    setTimeout(() => {
      this.isVisible = false;
    }, data.duration || 3000);
  }

  onActionClick() {
    if (this.actionCallback) {
      this.actionCallback();
    }
    this.isVisible = false;
  }
}
