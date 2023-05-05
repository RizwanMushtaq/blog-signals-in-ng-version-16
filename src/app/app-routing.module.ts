import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignalsComponent } from './signals.component';
import { ClassicComponent } from './classic.component';
import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
  {
    path: 'signals',
    component: SignalsComponent,
  },
  {
    path: 'classic',
    component: ClassicComponent,
  },
  {
    path: '',
    redirectTo: '/signals',
    pathMatch: 'full',
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
