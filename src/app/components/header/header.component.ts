import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  url: String = "";

  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
    this.url = this.location.path();
    console.log('url' , this.url);
  }

}
