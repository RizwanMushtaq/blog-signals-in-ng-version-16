import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {
  NgSwitch,
  NgSwitchDefault,
  NgSwitchCase,
  NgClass,
} from '@angular/common';
import { NavComponent } from './components/nav.component';

@Component({
  standalone: true,
  selector: 'app-root',
  template: ` <router-outlet></router-outlet> `,
  styles: [],
  imports: [
    NgSwitch,
    NgSwitchDefault,
    NgSwitchCase,
    RouterOutlet,
    RouterLink,
    NgClass,
    NavComponent,
  ],
})
export class AppComponent {}
