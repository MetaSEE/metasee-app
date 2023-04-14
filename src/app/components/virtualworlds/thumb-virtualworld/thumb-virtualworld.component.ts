import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-thumb-virtualworld',
  templateUrl: './thumb-virtualworld.component.html',
  styleUrls: ['./thumb-virtualworld.component.css']
})
export class ThumbVirtualworldComponent implements OnInit {

  @Input() virtualworld = {
    _id: 0,
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

  url_thumbs_vw = environment.URL_VIRTUALWORLD + environment.DIR_VW_THUMBS;
  url_thumbs_avatar = environment.DIR_APP_THUMBS_AVATAR;

  constructor() { }

  ngOnInit(): void {
  }

}
