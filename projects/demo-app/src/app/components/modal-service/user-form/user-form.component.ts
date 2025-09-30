import { Component, Input } from '@angular/core';
import { ModalService } from '../../../../../../redpanda/src/lib/modal-service/modal.service';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
})
export class UserFormComponent {
  @Input() name!: string;
  @Input() email!: string;

  constructor(private modalService: ModalService) {}

  close() {
    this.modalService.setStatus('Close');
  }
  addItem() {
    this.modalService.setStatus('Add');
  }
}
