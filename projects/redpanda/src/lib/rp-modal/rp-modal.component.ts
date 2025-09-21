import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { __spreadArray } from 'tslib';

@Component({
  selector: 'rp-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rp-modal.component.html',
  styleUrl: './rp-modal.component.css',
})
export class RpModalComponent {
  @Input() open = false;
  @Input() headerTitle: string | undefined = '';
  @Output() close = new EventEmitter<void>();

  ngOnInit(): void {}
  onBackdropClick() {
    this.close.emit();
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }
}
