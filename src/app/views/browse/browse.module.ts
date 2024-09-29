import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';

import { BrowseRoutingModule } from './browse-routing.module';
import { BrowseComponent } from './browse.component';
import { TopBarModule } from '~/app/shared/top-bar';

@NgModule({
  imports: [NativeScriptCommonModule, BrowseRoutingModule, TopBarModule],
  declarations: [BrowseComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class BrowseModule {}
