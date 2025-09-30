import { Component } from '@angular/core';
import { UserFormComponent } from './user-form/user-form.component';
import { ModalService } from '../../../../../redpanda/src/lib/modal-service/modal.service';

@Component({
  selector: 'app-modal-service',
  standalone: true,
  imports: [],
  templateUrl: './modal-service.component.html',
  styleUrl: './modal-service.component.scss',
})
export class ModalServiceComponent {
  constructor(private modalService: ModalService) {}
  title = 'demo-app';
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
