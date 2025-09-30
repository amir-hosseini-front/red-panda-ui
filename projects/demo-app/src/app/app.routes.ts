import { Routes } from '@angular/router';
import { BtnComponent } from './components/btn/btn.component';
import { InputComponent } from './components/input/input.component';
import { ModalComponent } from './components/modal/modal.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectorComponent } from './components/selector/selector.component';
import { RadioButtonsComponent } from './components/radio-buttons/radio-buttons.component';
import { TableComponent } from './components/table/table.component';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';
import { InstallationComponent } from './components/installation/installation.component';
import { ModalServiceComponent } from './components/modal-service/modal-service.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    title: 'Home page',
    children: [
      {
        path: 'installation',
        component: InstallationComponent,
        title: 'Home details',
      },
      {
        path: 'buttons',
        component: BtnComponent,
        title: 'Home details',
      },
      {
        path: 'radio-buttons',
        component: RadioButtonsComponent,
        title: 'Home details',
      },
      {
        path: 'modal',
        component: ModalComponent,
        title: 'Home details',
      },
      {
        path: 'selector',
        component: SelectorComponent,
        title: 'Home details',
      },
      {
        path: 'input',
        component: InputComponent,
        title: 'Home details',
      },
      {
        path: 'spinner',
        component: SpinnerComponent,
        title: 'Home details',
      },
      {
        path: 'snackbar',
        component: SnackBarComponent,
        title: 'Home details',
      },
      {
        path: 'table',
        component: TableComponent,
        title: 'Home details',
      },
      {
        path: 'service-modal',
        component: ModalServiceComponent,
        title: 'Home details',
      },
    ],
  },
];
export default routes;
