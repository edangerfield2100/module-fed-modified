import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'mfe1',
    loadChildren: () =>
      import('mfe1/LandingModule').then((m) => m.LandingModule),
  },
  {
    path: 'mfe2',
    loadChildren: () => import('mfe2/Module').then((m) => m.AppModule),
  },
  {
    path: 'flights',
    loadChildren: () =>
      import('mfe1/FlightModule').then((m) => m.FlightsModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },

  // DO NOT insert routes after this one.
  // { path:'**', ...} needs to be the LAST one.
];
