import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { TopBarComponent } from './top-bar.component';
import { NativeScriptCommonModule, ActionBarComponent } from '@nativescript/angular';

@NgModule({
  declarations: [TopBarComponent],
  exports: [TopBarComponent],
  imports: [NativeScriptCommonModule, ActionBarComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class TopBarModule {}
