import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [CommonModule, NavComponent],
  template: `
    <div class="main p-5">
      <h3>Signals</h3>

      <div>
        <p>Counter: {{ counter() }}</p>
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
        <li *ngFor="let action of actions()">{{ action }}</li>
      </ol>
    </div>
  `,
  styles: [],
})
export class SignalsComponent {
  public actions = signal<string[]>([]);
  public counter = signal(0);

  public increment(): void {
    this.counter.set(this.counter() + 1);
    this.actions.mutate((oldActions) => oldActions.push('INCREMENT'));
  }

  public decrement(): void {
    this.counter.update((oldCounter) => oldCounter - 1);
    this.actions.update((oldActions) => [...oldActions, 'DECREMENT']);
  }
}
