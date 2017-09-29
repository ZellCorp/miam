import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css'],
})
export class RestaurantListComponent implements OnInit {
  restaurants: Restaurant[];
  restaurant: Restaurant;

  add(): void {
    console.log('button add');
  }
  constructor(private restaurantService: RestaurantService) { };

  ngOnInit() {
    this.restaurantService.getRestaurants().subscribe(restaurants => this.restaurants = restaurants);
  }

}
