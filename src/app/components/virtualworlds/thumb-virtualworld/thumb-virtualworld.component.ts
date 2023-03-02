import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-thumb-virtualworld',
  templateUrl: './thumb-virtualworld.component.html',
  styleUrls: ['./thumb-virtualworld.component.css']
})
export class ThumbVirtualworldComponent implements OnInit {

  @Input() virtualworld = {
    id: 0,
    name: '',
    owner: {
      name: '',
      picture: ''
    },
    thumb: '',
    hashtag: [''],
    environment: '',
    created: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
