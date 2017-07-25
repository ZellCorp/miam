import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'miam-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('caca a');
  }

}
