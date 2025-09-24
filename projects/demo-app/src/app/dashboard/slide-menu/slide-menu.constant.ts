import { Type } from '@angular/core';
import { ComponentIconComponent } from '../../svg-icons/component-icon/component-icon.component';
import { HomeIconComponent } from '../../svg-icons/home-icon/home-icon.component';
import { DialogIconComponent } from '../../svg-icons/dialog-icon/dialog-icon.component';
import { BrowserUpdatedIconComponent } from '../../svg-icons/browser-updated-icon/browser-updated-icon.component';

export interface ItemChild {
  title: string;
  link: any;
}
export interface Item {
  id: number;
  title: string;
  icon: Type<any> | null;
  link: any;
  type: string;
  permission?: string[];
  child: ItemChild[];
}

export function getMenuItems(): Item[] {
  return [
    {
      id: 1,
      title: 'Home',
      icon: HomeIconComponent,
      link: '/home',
      type: 'menu',
      child: [],
    },
    {
      id: 2,
      title: 'Installation',
      icon: BrowserUpdatedIconComponent,
      link: '/installation',
      type: 'menu',
      child: [],
    },
    {
      id: 3,
      title: 'Component',
      icon: ComponentIconComponent,
      link: null,
      type: 'menu',
      child: [
        {
          title: 'Buttons',
          link: '/buttons',
        },
        {
          title: 'Radio Buttons',
          link: '/radio-buttons',
        },
        {
          title: 'Input',
          link: '/input',
        },
        {
          title: 'Selector',
          link: '/selector',
        },
        {
          title: 'Spinner',
          link: '/spinner',
        },
        {
          title: 'Snackbar',
          link: '/snackbar',
        },
      ],
    },
    {
      id: 4,
      title: 'Detail',
      icon: null,
      link: null,
      type: 'separator',
      child: [],
    },
    {
      id: 5,
      title: 'Table',
      icon: DialogIconComponent,
      link: 'table',
      type: 'menu',
      child: [],
    },
    {
      id: 6,
      title: 'Modal',
      icon: DialogIconComponent,
      link: 'modal',
      type: 'menu',
      child: [],
    },
  ];
}
