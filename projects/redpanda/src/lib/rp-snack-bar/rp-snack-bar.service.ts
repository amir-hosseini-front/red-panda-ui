import {
  ApplicationRef,
  ComponentRef,
  Injectable,
  Injector,
} from '@angular/core';
import { Subject } from 'rxjs';
import { SnackbarComponent } from './rp-snack-bar.component';
import { ComponentPortal } from '@angular/cdk/portal';
import { Overlay } from '@angular/cdk/overlay';

export interface SnackbarAction {
  label: string;
  callback: () => void;
}

export interface SnackbarData {
  message: string;
  type?: 'success' | 'error' | 'info' | 'warning';
  duration?: number;
  action?: SnackbarAction;
}
@Injectable({ providedIn: 'root' })
export class SnackbarService {
  constructor(private overlay: Overlay) {}

  show(data: SnackbarData) {
    const overlayRef = this.overlay.create({
      positionStrategy: this.overlay
        .position()
        .global()
        .centerHorizontally()
        .bottom('20px'),
      scrollStrategy: this.overlay.scrollStrategies.noop(),
    });

    const portal = new ComponentPortal(SnackbarComponent);
    const compRef = overlayRef.attach(portal);
    compRef.instance.open(data);
  }
}
