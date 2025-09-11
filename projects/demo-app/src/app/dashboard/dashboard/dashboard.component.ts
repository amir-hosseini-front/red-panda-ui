import { Component } from '@angular/core';
import { DashboardContentComponent } from '../dashboard-content/dashboard-content.component';
import { DashboardHeaderComponent } from '../dashboard-header/dashboard-header.component';
import { SlideMenuComponent } from '../slide-menu/slide-menu.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  standalone: true,
  styleUrls: ['./dashboard.component.scss'],
  imports: [
    DashboardContentComponent,
    DashboardHeaderComponent,
    SlideMenuComponent,
  ],
})
export class DashboardComponent {
  isMenuSelect = false;

  onMenuSelect() {
    this.isMenuSelect = !this.isMenuSelect;
  }
}
