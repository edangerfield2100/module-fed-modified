import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';

import { LANDING_ROUTES } from './landing.routes';
import {
  ROOT_REDUCERS,
  metaReducers,
} from 'projects/state-lib/src/lib/app-state/reducer';
import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(LANDING_ROUTES),
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
  ],
})
export class LandingModule {}
