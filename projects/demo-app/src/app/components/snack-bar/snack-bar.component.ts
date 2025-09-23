import { Component } from '@angular/core';
import { RpCardComponent } from '../../../../../redpanda/src/lib/rp-card/rp-card.component';
import { RpButtonComponent } from '../../../../../redpanda/src/lib/rp-button/rp-button.component';
import {
  SnackbarService,
  SnackbarType,
} from '../../../../../redpanda/src/lib/rp-snack-bar/rp-snack-bar.service';

@Component({
  selector: 'app-snack-bar',
  standalone: true,
  imports: [RpCardComponent, RpButtonComponent],
  templateUrl: './snack-bar.component.html',
  styleUrl: './snack-bar.component.scss',
})
export class SnackBarComponent {
  constructor(private snackbar: SnackbarService) {}

  onClick(type: SnackbarType) {
    this.snackbar.show({
      message: 'The operation was successful.',
      type: type,
      duration: 4000,
    });
  }
}
