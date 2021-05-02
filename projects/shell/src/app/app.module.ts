import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import {
  ROOT_REDUCERS,
  metaReducers,
} from 'projects/state-lib/src/lib/app-state/reducer';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule.forRoot(APP_ROUTES),
    StoreModule.forRoot(ROOT_REDUCERS, {
      metaReducers,
      runtimeChecks: {
        // strictStateImmutability and strictActionImmutability are enabled by default
        strictStateSerializability: true,
        strictActionSerializability: true,
        strictActionWithinNgZone: true,
        strictActionTypeUniqueness: true,
      },
    }),
    StoreRouterConnectingModule.forRoot(),
  ],
  declarations: [AppComponent, HomeComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
