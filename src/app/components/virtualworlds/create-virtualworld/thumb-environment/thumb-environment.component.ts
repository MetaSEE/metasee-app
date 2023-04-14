import { environment } from 'src/environments/environment';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-thumb-environment',
  templateUrl: './thumb-environment.component.html',
  styleUrls: ['./thumb-environment.component.css']
})
export class ThumbEnvironmentComponent implements OnInit {

  @Input() env: any; // Variável de entrada para receber o valor de env do componente pai
  environments: any; // Variável local no componente

  url_thumbs_vw = environment.URL_VIRTUALWORLD + environment.DIR_VW_THUMBS;

  ngOnChanges() {
    // Atribuir o valor de env à variável environments
    this.environments = this.env;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
