import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';

@Component({
  selector: 'app-classic',
  standalone: true,
  imports: [CommonModule, NavComponent],
  template: ` <div class="main">Classic</div> `,
  styles: [],
})
export class ClassicComponent {}
