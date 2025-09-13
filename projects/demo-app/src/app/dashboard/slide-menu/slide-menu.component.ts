import { Component, HostListener, Input } from '@angular/core';
import { getMenuItems, Item, ItemChild } from './slide-menu.constant';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AddLinkIconComponent } from '../../svg-icons/add-link-icon/add-link-icon.component';
import { ArrowDownIconComponent } from '../../svg-icons/arrow-down-icon/arrow-down-icon.component';

@Component({
  selector: 'app-slide-menu',
  templateUrl: './slide-menu.component.html',
  styleUrls: ['./slide-menu.component.scss'],
  imports: [RouterLink, RouterLinkActive, CommonModule, ArrowDownIconComponent],
  standalone: true,
})
export class SlideMenuComponent {
  @Input() isMenuSelect = false;
  menuItemClicked!: Item;
  childItemClicked!: ItemChild;

  canShowHelperKey = false;
  menuList: Item[] = getMenuItems();

  constructor() {}

  onMenuItemClick(menuItem: Item) {
    if (menuItem.link !== null) return;
    if (this.menuItemClicked == menuItem) {
      this.menuItemClicked = {} as Item;
    } else {
      this.menuItemClicked = menuItem;
    }
  }

  onMenuItemChildClick(child: ItemChild) {
    this.childItemClicked = child;
  }
  menuClicked(event: boolean) {
    this.isMenuSelect = event;
  }
}
