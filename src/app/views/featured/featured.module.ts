import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';

import { FeaturedRoutingModule } from './featured-routing.module';
import { FeaturedComponent } from './featured.component';
import { TopBarModule } from '~/app/shared/top-bar';

@NgModule({
  imports: [NativeScriptCommonModule, FeaturedRoutingModule, TopBarModule],
  declarations: [FeaturedComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class FeaturedModule {}
