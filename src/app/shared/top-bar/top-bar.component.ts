import { Component } from '@angular/core';

import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { Application } from '@nativescript/core';

@Component({
  selector: 'TopBar',
  templateUrl: 'top-bar.component.html',
  styleUrl: 'top-bar.component.scss',
})
export class TopBarComponent {
  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView();
    sideDrawer.showDrawer();
  }
}
