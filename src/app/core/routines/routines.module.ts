import { ModuleWithProviders, NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { key } from './routines.config';
import { Effects } from './routines.effects';
import { reducer } from './routines.reducer';

const storeModuleForFeature: ModuleWithProviders<StoreModule> = StoreModule.forFeature(key, reducer);
const effectsModuleForFeature: ModuleWithProviders<EffectsModule> = EffectsModule.forFeature([Effects]);

@NgModule({
  imports: [storeModuleForFeature, effectsModuleForFeature],
})
export class RoutinesModule {}
