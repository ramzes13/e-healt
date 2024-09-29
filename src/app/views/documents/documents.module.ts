import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular';

import { HomeRoutingModule } from './documents-routing.module';
import { DocumentsComponent } from './documents.component';
import { AppointmentComponent, HeaderComponent, ServicesComponent, RoutineComponent } from './components';

import { NoTopBarModule } from '~/app/shared/no-top-bar';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [NativeScriptCommonModule, HomeRoutingModule, NoTopBarModule, ReactiveFormsModule, NativeScriptFormsModule],
  declarations: [DocumentsComponent, AppointmentComponent, ServicesComponent, HeaderComponent, RoutineComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class DocumentsModule {}
