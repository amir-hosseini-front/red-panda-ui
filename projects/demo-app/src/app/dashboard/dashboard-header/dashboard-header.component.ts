import { Component, EventEmitter, Output } from '@angular/core';
import { MenuIconComponent } from '../../svg-icons/menu-icon/menu-icon.component';
import { MenuOpenIconComponent } from '../../svg-icons/menu-open-icon/menu-open-icon.component';
import { HelpCenterComponent } from '../../svg-icons/help-center/help-center.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss'],
  imports: [
    MenuIconComponent,
    MenuOpenIconComponent,
    HelpCenterComponent,
    RouterLink,
    CommonModule,
  ],
  standalone: true,
})
export class DashboardHeaderComponent {
  @Output() menuSelectEmit = new EventEmitter<string>();
  isMenuOpen = true;
  constructor() {}
  ngOnInit(): void {}

  get helpVideoUrl() {
    const currentUrl = window.location.href;
    const currentUrlSegments = currentUrl.split('/');
    let fileName = currentUrlSegments[currentUrlSegments.length - 1];
    switch (fileName) {
      case 'train-numbers':
        fileName = 'trainType';
        break;
      case 'wagons-type':
        fileName = 'wagons';
        break;
      default:
        fileName;
    }
    return '/assets/help/videos/' + fileName + '.mp4';
  }
  onMenuSelect() {
    this.menuSelectEmit.emit();
    this.isMenuOpen = !this.isMenuOpen;
  }
}
