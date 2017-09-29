import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Restaurant } from './restaurant';
import 'rxjs/add/operator/map';

@Injectable()
export class RestaurantService {
  constructor(private http: Http) { }

  getRestaurants(): Observable<Restaurant[]> {
    return this.http
      .get(`/api/restaurant`)
      .map(response => {
        return response.json() as Restaurant[];
      });
  }

  add(restaurant: Restaurant): Observable<any> {
    return this.http
      .post(`/api/restaurant`, restaurant)
      .map(response => {
        return response.json();
      });
  }

  vote(reference: string): Observable<any> {
    return this.http
      .put(`/api/restaurant`, reference)
      .map(response => {
        return response.json();
      });
  }

}
