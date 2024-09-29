import { ModuleWithProviders, NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { key } from './documents.config';
import { Effects } from './documents.effects';
import { reducer } from './documents.reducer';

const storeModuleForFeature: ModuleWithProviders<StoreModule> = StoreModule.forFeature(key, reducer);
const effectsModuleForFeature: ModuleWithProviders<EffectsModule> = EffectsModule.forFeature([Effects]);

@NgModule({
  imports: [storeModuleForFeature, effectsModuleForFeature],
})
export class DocumentModule {}
