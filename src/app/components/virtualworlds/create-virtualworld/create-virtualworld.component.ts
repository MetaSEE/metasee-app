import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-virtualworld',
  templateUrl: './create-virtualworld.component.html',
  styleUrls: ['./create-virtualworld.component.css']
})
export class CreateVirtualworldComponent implements OnInit {

  environments = [
    'default', 'contact', 'egypt', 'checkerboard', 'forest', 'goaland', 'yavapai', 'goldmine', 'threetowers', 'poison', 'arches', 'tron', 'japan', 'dream', 'volcano', 'starry', 'osiris', 'moon'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
