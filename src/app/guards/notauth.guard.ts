import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticateService } from '../services/authenticate.service';

@Injectable()
export class NotAuthGuard implements CanActivate {

  constructor(private as: AuthenticateService, private router: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
      if (this.as.loggedIn()) {
        this.router.navigate(['/']);
        return false;
      } else {
        return true;
      }
  };

}
