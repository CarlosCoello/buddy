import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PositionsService {
url = 'http://localhost:9000/positions';

  constructor(private http: Http) { }

  createPosition(info) {
    return this.http.post(this.url + '/position', info).map( res => res.json() );
  }

  applyToPosition(info) {
    return this.http.post(this.url + '/applyToPosition', info).map( res => res.json() );
  }
  
}
