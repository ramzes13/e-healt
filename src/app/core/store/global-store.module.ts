import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';

import { logoutReducer } from './logout.reducer';
import { paramsResetMetaReducer } from './params.reducer';
import { ParamsSerializer } from './params.serializer';
import { ParamsService } from './params.service';

export const storeRouterConnectingModuleForRoot: ModuleWithProviders<StoreRouterConnectingModule> =
  StoreRouterConnectingModule.forRoot({
    stateKey: 'params',
    serializer: ParamsSerializer,
  });

export const ngrxStoreModuleForRoot: ModuleWithProviders<StoreModule> = StoreModule.forRoot(
  {
    params: routerReducer,
  },
  {
    metaReducers: [paramsResetMetaReducer, logoutReducer],
    runtimeChecks: {
      strictStateImmutability: true,
      strictActionImmutability: true,
    },
    initialState: {
      params: {
        state: {
          url: '/',
          params: {},
          queryParams: {},
        },
        navigationId: 0,
      },
    },
  },
);

export const effectsModuleForRoot: ModuleWithProviders<EffectsModule> = EffectsModule.forRoot([]);

@NgModule({
  imports: [storeRouterConnectingModuleForRoot, ngrxStoreModuleForRoot, effectsModuleForRoot],
  providers: [ParamsService],
})
export class GlobalStoreModule {
  constructor(@Optional() @SkipSelf() parentModule?: GlobalStoreModule) {
    if (parentModule) {
      throw new Error('GlobalStoreModule is already loaded. Import it in the CoreModule only');
    }
  }
}
