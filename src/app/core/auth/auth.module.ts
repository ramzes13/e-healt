import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { storeKey } from './auth.config';
import { AuthEffects } from './auth.effects';
import { AuthHttpService } from './auth.http.service';
import { metaReducers, reducer } from './auth.reducer';
import { AuthService } from './auth.service';
import { PREFIX } from './prefix.token';

export const storeModuleForFeature: ModuleWithProviders<StoreModule> = StoreModule.forFeature(storeKey, reducer, {
  metaReducers,
});
export const effectsModuleForFeature: ModuleWithProviders<EffectsModule> = EffectsModule.forFeature([AuthEffects]);

@NgModule({
  imports: [storeModuleForFeature, effectsModuleForFeature],
  providers: [],
})
export class AuthModule {
  constructor(@Optional() @SkipSelf() parentModule?: AuthModule) {
    if (parentModule) {
      throw new Error('AuthModule is already loaded. Import it in the CoreModule only');
    }
  }
  static forRoot(prefix: string): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [AuthService, AuthHttpService, { provide: PREFIX, useValue: prefix }],
    };
  }
}
