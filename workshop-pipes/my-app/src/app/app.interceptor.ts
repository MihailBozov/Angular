import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { Observable } from "rxjs";
import {environment} from "../environments/environment.development"

@Injectable()
class AppIntereptor implements HttpInterceptor {
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(req.url.startsWith('/api')) {
            req= req.clone({
                url: req.url.replace('/api', environment.apiUrl)
            })
        }
        return next.handle(req);
    }  
}

export const appInterceptorProvider: Provider = {
    useClass: AppIntereptor, 
    multi: true,
    provide: HTTP_INTERCEPTORS
}