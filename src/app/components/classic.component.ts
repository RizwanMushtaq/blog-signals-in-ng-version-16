import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';

@Component({
  selector: 'app-classic',
  standalone: true,
  imports: [CommonModule, NavComponent],
  template: `
    <div class="main p-5">
      <h3>Default (Automatic Change Detection)</h3>

      <div>
        <p>Counter: {{ counter }}</p>
        <div class="d-flex gap-3 justify-content-center">
          <button class="btn btn-warning" (click)="decrement()">
            Decrement
          </button>
          <button class="btn btn-success" (click)="increment()">
            Increment
          </button>
        </div>
      </div>

      <h3 class="mt-5">Action Log</h3>
      <ol>
        <li *ngFor="let action of actions">{{ action }}</li>
      </ol>
    </div>
  `,
  styles: [],
})
export class ClassicComponent {
  actions: string[] = [];
  counter = 0;

  increment() {
    this.counter++;
    this.actions.push('INCREMENT');
  }

  decrement() {
    this.counter--;
    this.actions.push('DECREMENT');
  }
}
