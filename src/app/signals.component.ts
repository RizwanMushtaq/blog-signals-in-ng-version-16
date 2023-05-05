import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [CommonModule, NavComponent],
  template: ` <div class="main">Signals</div> `,
  styles: [],
})
export class SignalsComponent {}
