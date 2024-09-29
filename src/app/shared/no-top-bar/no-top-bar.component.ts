import { Component } from '@angular/core';

import { Page } from '@nativescript/core';

@Component({
  selector: 'NoTopBar',
  templateUrl: 'no-top-bar.component.html',
  styleUrl: 'no-top-bar.component.scss',
})
export class NoTopBarComponent {
  constructor(private page: Page) {
    this.page.actionBarHidden = true;
  }
}
