import { Injectable, ComponentRef, Injector, Type } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ModalService {
  private overlayRef!: OverlayRef;
  private modalStatusSubject = new BehaviorSubject<string>('');
  modalStatus$ = this.modalStatusSubject.asObservable();
  private isModalOpen = false;
  constructor(private overlay: Overlay, private injector: Injector) {}

  open<T extends object>(component: Type<T>, data?: Partial<T>) {
    if (this.isModalOpen) {
      return;
    }
    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      backdropClass: 'custom-backdrop',
      panelClass: 'custom-panel',
      positionStrategy: this.overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically(),
    });

    this.overlayRef.backdropClick().subscribe(() => this.close());

    const portal = new ComponentPortal(component);
    const componentRef = this.overlayRef.attach(portal);
    if (data) {
      Object.assign(componentRef.instance, data);
    }

    this.setStatus('Modal Opened');
    this.isModalOpen = true;
    this.modalStatus$.subscribe((status: string) => {
      if (status === 'Modal Closed') {
        this.isModalOpen = false;
      }
    });
  }

  close(): void {
    if (this.overlayRef) {
      this.overlayRef.dispose();
      this.overlayRef = null!;
    }
    this.setStatus('Modal Closed');
    this.isModalOpen = false;
  }

  setStatus(status: string): void {
    this.modalStatusSubject.next(status);
  }
}
