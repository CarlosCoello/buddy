import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticateService } from '../services/authenticate.service';

@Injectable()
export class AuthGuard implements CanActivate {
redirectUrl: String;

  constructor(private as: AuthenticateService, private router: Router) {

  }
  canActivate(
    router: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    if (this.as.loggedIn()) {
      return true;
    } else {
      this.redirectUrl = state.url;
      this.router.navigate(['/login']);
      return false;
    }
  }
  
}
