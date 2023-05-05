import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgSwitch, NgSwitchDefault, NgSwitchCase } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <nav class="bg-primary">
      <div class="container-fluid text-light">
        <a>Signals</a>
        <a>Classic</a>
      </div>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [],
  imports: [NgSwitch, NgSwitchDefault, NgSwitchCase, RouterOutlet, RouterLink],
})
export class AppComponent {}
