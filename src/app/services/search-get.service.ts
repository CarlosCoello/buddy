import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchGetService {
options;
url = 'http://localhost:9000/search/';

  constructor(private http: Http) { }

  createAuthHeaders(){
    this.options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });
  };

  getSearch(search, city, state) {
    return this.http.get(this.url + 'getSearch/' + search + '/' + city + '/' + state).map( res => res.json() );
  };

  getPosition(id) {
    return this.http.get(this.url + 'getPosition/' + id).map(res => res.json() );
  };

}
