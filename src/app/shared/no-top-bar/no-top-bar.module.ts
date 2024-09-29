import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NoTopBarComponent } from './no-top-bar.component';

@NgModule({
  declarations: [NoTopBarComponent],
  exports: [NoTopBarComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class NoTopBarModule {}
