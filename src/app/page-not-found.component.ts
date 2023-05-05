import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <a routerLink="/" class="text-center p-5 text-danger">
      <p>page-not-found! back to home page</p>
    </a>
  `,
  styles: [],
})
export class PageNotFoundComponent {}
