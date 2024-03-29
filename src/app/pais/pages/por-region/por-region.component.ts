import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
    button {
      margin-right: 5px;
    }
    `
  ]
})
export class PorRegionComponent {

  regiones : string[] = [
    'africa', 'americas', 'asia', 'europe', 'oceania'
  ];
  regionActiva: string = '';
  paises : Country[] = [];

  constructor( private paisService : PaisService ) {}

  getClaseCSS( region : string ) : string {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activaRegion( region: string ){

    if( region === this.regionActiva ) { return }

    this.regionActiva = region;
    this.paises = [];

    this.paisService.buscarRegion( this.regionActiva )
      .subscribe( (paises) => {

        this.paises = paises;

      }, (error) => {
        console.info(error);
      })
  }

}
