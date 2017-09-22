import { Routes, RouterModule } from '@angular/router';

const MAINMENU_ROUTES: Routes = [
  //full : makes sure the path is absolute path
  { path: 'user', redirectTo: '/user', pathMatch: 'full' },
];
export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);
