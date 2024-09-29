import { NgModule } from '@angular/core';

import { RoutinesModule } from './routines';
import { AppointmentModule } from './appointment';
import { AuthModule } from './auth';
import { GlobalStoreModule } from './store/global-store.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ServicesModule } from './services/services.module';

import { HttpInterceptorService } from './http-interceptor/http-interceptor.service';

@NgModule({
  imports: [
    HttpClientModule,
    GlobalStoreModule,
    AuthModule.forRoot('eHealth'),
    RoutinesModule,
    AppointmentModule,
    ServicesModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
  ],
})
export class CoreModule {}
