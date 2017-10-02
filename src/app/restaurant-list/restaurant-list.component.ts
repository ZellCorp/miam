import { Component, OnInit } from '@angular/core';

import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';
import { VoteService } from '../vote.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css'],
})
export class RestaurantListComponent implements OnInit {
  restaurants: Restaurant[];
  restaurant: Restaurant;

  constructor(private restaurantService: RestaurantService, private voteService: VoteService) {
    this.restaurant = new Restaurant();
  };

  add(): void {
    this.restaurantService.addRestaurant(this.restaurant).subscribe(response => this.restaurant = response);
    this.restaurants.push(this.restaurant);
  }

  vote(restaurantAddress: string): void {
    this.voteService.vote(restaurantAddress).subscribe(response => console.log(response));
  }

  ngOnInit() {
    this.restaurantService.getRestaurants().subscribe(response => this.restaurants = response);
  }

}
