import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpResponse } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { HttpEvent } from '@angular/common/http';
import { finalize, tap } from 'rxjs/operators';
import { LoaderService } from 'src/app/core/services/loader-service';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
  private totalRequests = 0;
  constructor(private loaderService: LoaderService) {
    this.loaderService.isLoad = false;
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.isLoad = true;
    this.totalRequests++;
    return next.handle(req)
      .pipe(
        finalize(() => {
          this.totalRequests--;
          if (this.totalRequests === 0) {
            this.loaderService.isLoad = false;
          }
        })
      );
  }
}
