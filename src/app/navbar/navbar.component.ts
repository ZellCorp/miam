import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'miam-header',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('caca a');
  }

}
