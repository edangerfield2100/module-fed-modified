import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { loadRemoteModule } from './utils/federation-utils';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'mfe1',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'mfe1',
        remoteEntry: 'http://localhost:3002/remoteEntry.js',
        exposedModule: 'LandingModule',
      }).then((m) => m.LandingModule),
  },
  {
    path: 'mfe2',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'mfe2',
        remoteEntry: 'http://localhost:3003/remoteEntry.js',
        exposedModule: 'MFE2Module',
      }).then((m) => m.AppModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
