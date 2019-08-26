import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class InterceptorService implements HttpInterceptor {
  baseURL = 'https://jsonplaceholder.typicode.com/';

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    try {
      const httpNewRequest = new HttpRequest(<any>request.method, this.baseURL + request.url, request.body);
      request = Object.assign(request, httpNewRequest);
      return next.handle(request);
    } catch (e) {
      console.error(e);
    }
  }
}
