import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [CommonModule, NavComponent],
  template: `
    <div class="main p-5">
      <h1>Signals</h1>
    </div>
  `,
  styles: [],
})
export class SignalsComponent {}
