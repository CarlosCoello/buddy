import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RegisterPostService {
options;
url = 'http://localhost:9000/register';

  constructor(private http: Http) { }

  createAuthHeaders(){
    this.options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });
  };

  upgradeAccount(info){
    return this.http.post('http://localhost:9000/upgrade' + '/pay', info, this.options).map(res => res.json());
  }

  registerUser(info) {
    return this.http.post(this.url + '/newUser', info).map( res => res.json() );
  };

  registerPaymentInfo(info) {
    return this.http.post(this.url + '/paymentInfo', info).map( res => res.json() );
  }

  getPaymentInfo(id) {
    return this.http.get(this.url + '/userPaymentInfo/' + id).map( res => res.json() );
  }

  updatePaymentFirstName(info) {
    return this.http.post(this.url + '/updatePaymentFirstName', info).map( res => res.json() );
  }

  updatePaymenLastName(info) {
    return this.http.post(this.url + '/updatePaymentLastName', info).map( res => res.json() );
  }

  updatePaymenAddress(info) {
    return this.http.post(this.url + '/updatePaymentAddress', info).map( res => res.json() );
  }

  updatePaymenCity(info) {
    return this.http.post(this.url + '/updatePaymentCity', info).map( res => res.json() );
  }

  updatePaymenState(info) {
    return this.http.post(this.url + '/updatePaymentState', info).map( res => res.json() );
  }

  updatePaymenCard(info) {
    return this.http.post(this.url + '/updatePaymentCard', info).map( res => res.json() );
  }

  updatePaymenCardType(info) {
    return this.http.post(this.url + '/updatePaymentCardType', info).map( res => res.json() );
  }

  updatePaymenCardNum(info) {
    return this.http.post(this.url + '/updatePaymentCardNum', info).map( res => res.json() );
  }

}
