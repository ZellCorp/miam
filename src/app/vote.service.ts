import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class VoteService {

  options: RequestOptionsArgs;

  constructor(private http: Http) {
    this.options = {
      headers: new Headers({ 'Content-Type': 'application/json;charset=UTF-8' }),
    };
  }

  vote(restaurantAddress: string): Observable<any> {

    return this.http
      .patch(`/api/votes/today`, { restaurantAddress: restaurantAddress }, this.options)
      .map(response => {
        return response.json();
      });
  }
}
