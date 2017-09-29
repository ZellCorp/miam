import { Routes, RouterModule } from '@angular/router';

import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantComponent } from './restaurant-list/restaurant/restaurant.component';

// Route config let's you map routes to components
const routes: Routes = [
  // map '/persons' to the people list component
  {
    path: 'restaurants',
    component: RestaurantListComponent,
  },
  {
    path: 'restaurant',
    component: RestaurantComponent,
  },
  {
    path: '',
    redirectTo: '/restaurants',
    pathMatch: 'full'
  }
];

export const appRouterModule = RouterModule.forRoot(routes);
