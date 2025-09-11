import { Type } from '@angular/core';
import { ComponentIconComponent } from '../../svg-icons/component-icon/component-icon.component';
import { HomeIconComponent } from '../../svg-icons/home-icon/home-icon.component';
import { DialogIconComponent } from '../../svg-icons/dialog-icon/dialog-icon.component';

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
      title: 'Component',
      icon: ComponentIconComponent,
      link: null,
      type: 'menu',
      child: [
        {
          title: 'Button',
          link: '/tut',
        },
        {
          title: 'Input',
          link: '/dsf',
        },
        {
          title: 'Selector',
          link: '/ads',
        },
      ],
    },
    {
      id: 3,
      title: 'Detail',
      icon: null,
      link: null,
      type: 'separator',
      child: [],
    },
    {
      id: 3,
      title: 'Modal',
      icon: DialogIconComponent,
      link: 'modal',
      type: 'menu',
      child: [],
    },
  ];
}
