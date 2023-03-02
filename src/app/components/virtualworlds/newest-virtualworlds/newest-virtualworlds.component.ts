import { VirtualworldsService } from './../virtualworlds.service';
import { VirtualWorld } from './../virtualworld';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newest-virtualworlds',
  templateUrl: './newest-virtualworlds.component.html',
  styleUrls: ['./newest-virtualworlds.component.css']
})
export class NewestVirtualworldsComponent implements OnInit {

  virtualworlds: VirtualWorld[] = [];

  constructor(
    private service: VirtualworldsService
  ) { }

  ngOnInit(): void {
    this.service.show().subscribe((virtualworlds)=>{
      this.virtualworlds = virtualworlds;
    })
  }

}
