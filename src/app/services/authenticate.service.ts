import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthenticateService {
options: any;
url = 'http://localhost:9000/authentication';
authenticateToken: any;
authenticateUser: any;

  constructor(private http: Http) { }

  createAuthHeaders(){
    this.sendToken();
    this.options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json',
        'authorization': this.authenticateToken
      })
    });
  };

  authenticateMe(user) {
    return this.http.post(this.url + '/login', user).map(res => res.json() );
  };

  storeLoggedInUserData(token, user) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user) );
    this.authenticateToken = token;
    this.authenticateUser = user;
  }

  deleteLocalStoredUserData() {
    this.authenticateToken = null;
    this.authenticateUser = null;
    localStorage.clear();
  }

  sendToken() {
    this.authenticateToken = localStorage.getItem('token');
  }

  loggedIn() {
    return tokenNotExpired();
  }

}
