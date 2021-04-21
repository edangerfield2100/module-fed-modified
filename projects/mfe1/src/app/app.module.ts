import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FlightsModule } from './flights/flights.module';
import { APP_ROUTES } from './app.routes';
import { LandingModule } from './landing/landing.module';
import {
  ROOT_REDUCERS,
  metaReducers,
} from 'projects/state-lib/src/lib/app-state/reducer';

@NgModule({
  imports: [
    BrowserModule,
    FlightsModule,
    LandingModule,
    RouterModule.forRoot(APP_ROUTES),
    // StoreModule.forRoot(ROOT_REDUCERS, {
    //   metaReducers,
    //   runtimeChecks: {
    //     // strictStateImmutability and strictActionImmutability are enabled by default
    //     strictStateSerializability: true,
    //     strictActionSerializability: true,
    //     strictActionWithinNgZone: true,
    //     strictActionTypeUniqueness: true,
    //   },
    // }),
    StoreRouterConnectingModule.forRoot(),
  ],
  declarations: [HomeComponent, AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
