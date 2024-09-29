import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TopBarModule } from '~/app/shared/top-bar';

@NgModule({
  imports: [NativeScriptCommonModule, LoginRoutingModule, ReactiveFormsModule, NativeScriptFormsModule, TopBarModule],
  declarations: [LoginComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class LoginModule {}
