import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {
url = 'http://localhost:9000/profile';

  constructor(private http: Http) { }

  getProfile(id) {
    return this.http.get(this.url + '/profileInfo/' + id).map( res => res.json() );
  }

  updateProfileFirstName(info) {
    return this.http.put(this.url + '/updateProfileFirstName', info).map( res => res.json() );
  }

  updateProfileLastName(info) {
    return this.http.put(this.url + '/updateProfileLastName', info).map( res => res.json() );
  }

  updateProfileEmail(info) {
    return this.http.put(this.url + '/updateProfileEmail', info).map( res => res.json() );
  }

}
