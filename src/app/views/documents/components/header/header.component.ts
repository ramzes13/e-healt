import { Component, Input, OnInit, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Application, Color, Page } from '@nativescript/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

@Component({
  selector: 'Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() search: FormControl<string>;

  private page = inject(Page);

  currentDate = new Date();
  info =
    'The ultrasound (USG) test shows measurements indicative of a possible presence of an abdominal mass or abnormality, with dimensions approximately 28.7 mm, 22.8 mm, and 29.2 mm. These measurements warrant further evaluation to determine the nature of the abnormality and guide treatment decisions.'
      .slice(0, 150)
      .concat('...');

  ngOnInit(): void {
    this.page.androidStatusBarBackground = new Color('#3b82f6');
  }

  showDrawer(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView();
    sideDrawer.showDrawer();
  }
}
