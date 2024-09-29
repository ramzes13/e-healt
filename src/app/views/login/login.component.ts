import { Component, inject } from '@angular/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { Application } from '@nativescript/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '~/app/core';
import { Router } from '@angular/router';

@Component({
  selector: 'Login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  private _auth = inject(AuthService);
  private _router = inject(Router);

  form = new FormGroup({
    email: new FormControl('darii.petru@gmail.com', Validators.required),
    password: new FormControl('string', Validators.required),
  });

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView();
    sideDrawer.showDrawer();
  }

  login() {
    this._auth.signIn(this.form.getRawValue()).subscribe((value) => {
      if (value) this._router.navigate(['/home']);
    });
  }
}
