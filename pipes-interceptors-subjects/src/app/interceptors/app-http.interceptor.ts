import { Injectable, Provider } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { catchError, EMPTY, Observable, tap } from 'rxjs';
import { API_URL } from '../constants/constants';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url.startsWith('/api')) {
      request = request.clone({
        url: request.url.replace('/api', API_URL)
      })
    }
    // We use pipe() when we want to apply one or more operations to an observable
    // We use tap() when we want to execute some code (like logging) every time the observable emmits a value withot altering the value itself


    // If we catch an error in the interceptor it will not be accessible in the observable

    return next.handle(request).pipe(
      tap( req => {
        if (req instanceof HttpRequest) {
          // console.log(req)
        }
      }),
      catchError(err => {
        if (err.status === 0) {
          console.error('Error from interceptor', err);
          return EMPTY
        }
        return [err]
      })
    );
  }
}

export const appHttpInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AppHttpInterceptor
}
