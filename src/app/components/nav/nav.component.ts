import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul class="nav nav-pills nav-fill m-5">
      <li class="nav-item">
        <div
          class="nav-link"
          [ngClass]="{ active: isSignalActive() }"
          aria-current="page"
          (click)="onSignalClick()"
        >
          Signals
        </div>
      </li>
      <li class="nav-item">
        <div
          class="nav-link"
          [ngClass]="{ active: !isSignalActive() }"
          (click)="onClassicClick()"
        >
          Classic Change Detection
        </div>
      </li>
    </ul>
  `,
  styles: [
    `
      .nav {
        display: flex;
        justify-content: center;
      }
      .nav-item {
        cursor: pointer;
        max-width: 300px;
      }
    `,
  ],
})
export class NavComponent implements OnInit {
  public isSignalActive = signal(true);

  constructor(private router: Router) {}

  public ngOnInit() {
    this.isSignalActive.set(true);
  }

  public onSignalClick(): void {
    this.isSignalActive.set(true);
    this.router.navigate(['/signals']);
    console.log('isSignalsactive', this.isSignalActive());
  }

  public onClassicClick(): void {
    this.isSignalActive.set(false);
    this.router.navigate(['/classic']);
    console.log('isSignalsactive', this.isSignalActive());
  }
}
