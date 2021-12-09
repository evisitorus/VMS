import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string): true|UrlTree {   
    this.authService.redirectUrl = url;
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.clean();
      return this.router.parseUrl('/login');
    }
  }

  clean(): void {
    this.authService.setLoggedIn(false);
    localStorage.removeItem('access_token');
    localStorage.removeItem('person_id');
    localStorage.removeItem('vendor_id');
  }

}
  