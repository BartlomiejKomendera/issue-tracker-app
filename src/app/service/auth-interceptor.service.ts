import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const idToken = localStorage.getItem('token');

    if (idToken) {
      console.log('Interceptor if works');
      console.log('idToken: ' + idToken);

      const cloned = req.clone({
        headers: req.headers.set('Authorization','Bearer ' + idToken)
      });

      return next.handle(cloned);

    } else {
      console.log('Interceptor else works');

      return next.handle(req);

    }
  }
}