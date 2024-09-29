import { Component, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';
import { DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition } from 'nativescript-ui-sidedrawer';
import { filter } from 'rxjs/operators';
import { Application } from '@nativescript/core';
import { keepAwake } from '@nativescript-community/insomnia';
import { AuthService } from './core';

@Component({
  selector: 'ns-app',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  private _activatedUrl: string;
  private _sideDrawerTransition: DrawerTransitionBase;

  private _router = inject(Router);
  private _routerExtensions = inject(RouterExtensions);
  private _auth = inject(AuthService);

  ngOnInit(): void {
    this._activatedUrl = '/home';
    this._sideDrawerTransition = new SlideInOnTopTransition();

    this._router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => (this._activatedUrl = event.urlAfterRedirects));

    keepAwake().then(function () {
      console.log('Insomnia is active');
    });
  }

  get sideDrawerTransition(): DrawerTransitionBase {
    return this._sideDrawerTransition;
  }

  isComponentSelected(url: string): boolean {
    return this._activatedUrl === url;
  }

  onNavItemTap(navItemRoute: string): void {
    this._routerExtensions.navigate([navItemRoute], {
      transition: {
        name: 'fade',
      },
    });

    const sideDrawer = <RadSideDrawer>Application.getRootView();
    sideDrawer.closeDrawer();
  }

  logout() {
    this._auth.logout();

    const sideDrawer = <RadSideDrawer>Application.getRootView();
    sideDrawer.closeDrawer();

    this._router.navigate(['/login']);
  }
}
