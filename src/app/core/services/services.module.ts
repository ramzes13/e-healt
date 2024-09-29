import { ModuleWithProviders, NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { key } from './services.config';
import { Effects } from './services.effects';
import { reducer } from './services.reducer';

const storeModuleForFeature: ModuleWithProviders<StoreModule> = StoreModule.forFeature(key, reducer);
const effectsModuleForFeature: ModuleWithProviders<EffectsModule> = EffectsModule.forFeature([Effects]);

@NgModule({
  imports: [storeModuleForFeature, effectsModuleForFeature],
})
export class ServicesModule {}
