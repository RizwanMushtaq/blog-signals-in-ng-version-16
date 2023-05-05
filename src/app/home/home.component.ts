import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../components/nav.component';
import { ActiveTab } from '../types/types';
import { SignalsComponent } from '../components/signals.component';
import { ClassicComponent } from '../components/classic.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavComponent, SignalsComponent, ClassicComponent],
  template: `
    <app-nav
      [activeTab]="activeTab"
      (onActiveTabChange)="onActiveTabChange($event)"
    ></app-nav>
    <ng-container *ngIf="activeTab === ActiveTab.Signals">
      <app-signals></app-signals>
    </ng-container>
    <ng-container *ngIf="activeTab === ActiveTab.Classic">
      <app-classic></app-classic>
    </ng-container>
  `,
  styles: [],
})
export class HomeComponent implements OnInit {
  public activeTab: ActiveTab;
  public ActiveTab = ActiveTab;

  constructor(private router: Router) {}

  ngOnInit() {
    this.activeTab = ActiveTab.Signals;
  }

  public onActiveTabChange(tab: ActiveTab): void {
    console.log(tab);
    switch (tab) {
      case ActiveTab.Signals:
        this.activeTab = ActiveTab.Signals;
        break;
      case ActiveTab.Classic:
        this.activeTab = ActiveTab.Classic;
        break;
      default:
        this.router.navigate(['page-not-found']);
    }
  }
}
