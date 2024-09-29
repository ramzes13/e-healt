import { NgModule, inject } from '@angular/core';
import { CanActivateFn, Router, Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { map } from 'rxjs';
import { AuthService } from './core';

export const isAuthenticatedGuard: CanActivateFn = () => {
  const router: Router = inject(Router);

  return inject(AuthService).isAuthenticated.pipe(
    map((isAuthenticated) => {
      if (isAuthenticated) return true;

      return router.createUrlTree(['/login']);
    }),
  );
};

export const isNotAuthenticatedGuard: CanActivateFn = () => {
  const router: Router = inject(Router);

  return inject(AuthService).isAuthenticated.pipe(
    map((isAuthenticated) => {
      if (!isAuthenticated) return true;

      return router.createUrlTree(['/home']);
    }),
  );
};

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('~/app/views/login'),
    canActivate: [isNotAuthenticatedGuard],
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'home',
    loadChildren: () => import('~/app/views/home'),
    canActivate: [isAuthenticatedGuard],
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'documents',
    loadChildren: () => import('~/app/views/documents'),
    canActivate: [isAuthenticatedGuard],
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'browse',
    loadChildren: () => import('~/app/views/browse'),
    canActivate: [isAuthenticatedGuard],
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'search',
    loadChildren: () => import('~/app/views/search'),
    canActivate: [isAuthenticatedGuard],
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'featured',
    loadChildren: () => import('~/app/views/featured'),
    canActivate: [isAuthenticatedGuard],
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'settings',
    loadChildren: () => import('~/app/views/settings'),
    canActivate: [isAuthenticatedGuard],
    runGuardsAndResolvers: 'always',
  },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
