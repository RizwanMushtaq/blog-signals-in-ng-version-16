import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ActiveTab } from '../types/types';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul class="nav nav-pills nav-fill m-3">
      <li class="nav-item">
        <div
          class="nav-link"
          [ngClass]="{ active: activeTab === ActiveTab.Signals }"
          aria-current="page"
          (click)="onSignalClick()"
        >
          Signals
        </div>
      </li>
      <li class="nav-item">
        <div
          class="nav-link"
          [ngClass]="{ active: activeTab === ActiveTab.Classic }"
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
export class NavComponent {
  @Input() activeTab: ActiveTab;
  @Output() onActiveTabChange = new EventEmitter<ActiveTab>();
  public ActiveTab = ActiveTab;

  constructor(private router: Router) {}

  public onSignalClick(): void {
    this.onActiveTabChange.emit(ActiveTab.Signals);
  }

  public onClassicClick(): void {
    this.onActiveTabChange.emit(ActiveTab.Classic);
  }
}
