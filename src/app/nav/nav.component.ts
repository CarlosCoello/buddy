import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../services/authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private authenticateService: AuthenticateService, private router: Router) {}

  ngOnInit() {
    this.displayDashboard();
  }

  logMeOut() {
    this.authenticateService.deleteLocalStoredUserData();
    this.router.navigate(['/']);
  }


  displayDashboard() {
    if (  this.authenticateService.loggedIn() ) {
      const user = JSON.parse(localStorage.getItem('user'));
      const account = user.account;
        if ( account === 'candidate' ) {
          return true;
       } else if ( account === 'employer') {
          return false;
       }
    }
  }


}
