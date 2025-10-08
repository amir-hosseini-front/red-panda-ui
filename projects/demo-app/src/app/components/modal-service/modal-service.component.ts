import { Component } from '@angular/core';
import { UserFormComponent } from './user-form/user-form.component';
import { ModalService } from '../../../../../redpanda/src/lib/modal-service/modal.service';
import { RpCardComponent } from '../../../../../redpanda/src/lib/rp-card/rp-card.component';

@Component({
  selector: 'app-modal-service',
  standalone: true,
  imports: [RpCardComponent],
  templateUrl: './modal-service.component.html',
  styleUrl: './modal-service.component.scss',
})
export class ModalServiceComponent {
  title = 'demo-app';
  constructor(private modalService: ModalService) {}
  onClick() {
    this.modalService.open(UserFormComponent, {
      name: 'Ali Redpanda 🐼',
      email: 'ali@redpanda.dev',
    });
    this.modalService.modalStatus$.subscribe((data: string) => {
      console.log(data);
      if (data == 'Close') {
        this.modalService.close();
      } else {
      }
    });
  }
}
