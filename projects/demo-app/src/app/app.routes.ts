import { Routes } from '@angular/router';
import { BtnComponent } from './components/btn/btn.component';
import { InputComponent } from './components/input/input.component';
import { ModalComponent } from './components/modal/modal.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'btn',
    component: BtnComponent,
    title: 'Home details',
  },
  {
    path: 'modal',
    component: ModalComponent,
    title: 'Home details',
  },
  {
    path: 'input',
    component: InputComponent,
    title: 'Home details',
  },
];
export default routes;
