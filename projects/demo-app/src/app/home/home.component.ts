import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  elementList = [
    {
      name: 'rp-btn',
      link: 'buttons',
    },
    {
      name: 'rp-modal',
      link: 'modal',
    },
    {
      name: 'rp-input',
      link: 'input',
    },
    {
      name: 'rp-spinner',
      link: 'spinner',
    },
  ];
}
