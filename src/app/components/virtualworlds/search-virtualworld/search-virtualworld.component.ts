import { VirtualworldsService } from './../virtualworlds.service';
import { VirtualWorld } from './../virtualworld';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-virtualworld',
  templateUrl: './search-virtualworld.component.html',
  styleUrls: ['./search-virtualworld.component.css']
})
export class SearchVirtualworldComponent implements OnInit {

  virtualworlds: VirtualWorld[] = []

  constructor(
    private service: VirtualworldsService
  ) { }

  ngOnInit(): void {
    this.service.show().subscribe((virtualworlds)=>{
      this.virtualworlds = virtualworlds;
    });
  }

}
