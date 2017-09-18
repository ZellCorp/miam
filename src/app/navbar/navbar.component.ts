import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'miam-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }
  isOverlayOn: boolean = false;

  ngOnInit() {
  }

  /* Set the width of the side navigation to 250px */
  openNavBar(): void {
    this.isOverlayOn = true;
  }

  /* Set the width of the side navigation to 0 */
  closeNavBar(): void {
    this.isOverlayOn = false;
  }

}
