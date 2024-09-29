import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AppointmentComponent, HeaderComponent, ServicesComponent, RoutineComponent } from './components';

import { NoTopBarModule } from '~/app/shared/no-top-bar';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [NativeScriptCommonModule, HomeRoutingModule, NoTopBarModule, ReactiveFormsModule, NativeScriptFormsModule],
  declarations: [HomeComponent, AppointmentComponent, ServicesComponent, HeaderComponent, RoutineComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class HomeModule {}
