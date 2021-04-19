import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LANDING_ROUTES } from './landing.routes';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(LANDING_ROUTES)],
})
export class LandingModule {}
