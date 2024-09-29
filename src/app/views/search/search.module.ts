import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { TopBarModule } from '~/app/shared/top-bar';

@NgModule({
  imports: [NativeScriptCommonModule, SearchRoutingModule, TopBarModule],
  declarations: [SearchComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SearchModule {}
