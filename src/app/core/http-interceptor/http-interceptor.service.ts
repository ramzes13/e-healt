import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, first, switchMap, throwError } from 'rxjs';

import { AuthService } from '../auth/auth.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  constructor(private _router: Router, private _auth: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url.includes('assets') || request.url.includes('sign-in'))
      return next.handle(request).pipe(catchError((error: HttpErrorResponse) => this._handleError(error)));

    return this._auth.token.pipe(
      first(),
      switchMap((token) => this._addAuthorizationToken(request, next, token)),
    );
  }

  private _handleUnauthorized(error: HttpErrorResponse): Observable<HttpEvent<unknown>> {
    return this._handleError(error);
  }

  private _addAuthorizationToken(
    request: HttpRequest<unknown>,
    next: HttpHandler,
    token: string | null,
  ): Observable<HttpEvent<unknown>> {
    if (!token) return this._handleNullToken();

    const newRequest = request.clone({
      setHeaders: { Authorization: `Bearer ${token}` },
    });

    return next.handle(newRequest).pipe(catchError((error: HttpErrorResponse) => this._handleUnauthorized(error)));
  }

  private _handleError(error: HttpErrorResponse): Observable<never> {
    if (error.status === 403) this._goToLogin();

    return throwError(() => error.error as unknown);
  }

  private _handleNullToken(): Observable<never> {
    this._goToLogin();

    return throwError(() => 'Null token');
  }

  private _goToLogin(): void {
    void this._router.navigate(['/', 'login']);
  }
}
