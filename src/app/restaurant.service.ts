import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Restaurant } from './restaurant';
import 'rxjs/add/operator/map';

@Injectable()
export class RestaurantService {
  constructor(private http: Http) { };

  getRestaurants(): Observable<Restaurant[]> {
    return this.http
      .get(`/api/restaurants`)
      .map(response => {
        return response.json() as Restaurant[];
      });
  };

  addRestaurant(restaurant: Restaurant): Observable<any> {
    return this.http
      .post(`/api/restaurants`, restaurant)
      .map(response => {
        return response.json();
      });
  };
}
