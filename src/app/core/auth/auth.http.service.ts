import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { SignIn, SignInResponse } from './auth.type';
import { HOST } from '../env';

@Injectable()
export class AuthHttpService {
  constructor(private _http: HttpClient) {}

  signIn(body: SignIn): Observable<SignInResponse> {
    return this._http.post<SignInResponse>(`${HOST}/auth/sign-in`, body);
  }
}
