import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {

  termino: string = '';
  hayError:boolean = false;
  paises : Country[] = [];

  constructor( private paisServices: PaisService ) {}

  buscar( termino : string ) {

    this.hayError = false;
    this.termino = termino;

    this.paisServices.buscarCapital( this.termino )
      .subscribe( (paises) => {

        this.paises = paises

      }, (err) => {

        this.hayError = true;
        this.paises = [];

      });
  }

}
