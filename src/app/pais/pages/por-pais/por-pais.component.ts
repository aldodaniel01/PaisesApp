import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {
  termino: string = '';
  hayError:boolean = false;
  paises : Country[] = [];
  paisesSugeridos : Country[] = [];
  mostrarSugerencia : boolean = false;

  constructor( private PaisService: PaisService ){}

  buscar( termino : string ) {

    this.hayError = false;
    this.termino = termino;
    console.log(this.termino);

    this.PaisService.buscarPais(this.termino)
    .subscribe( (paises) => {

      this.paises = paises;
      console.log(this.paises);

    }, (err) => {

      this.hayError = true;
      this.paises = [];

    });

    this.mostrarSugerencia = false;
  }

  sugerencias( termino : string ) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencia = true;

    this.PaisService.buscarPais( termino )
      .subscribe( (paises) =>{
        this.paisesSugeridos = paises.splice(0, 5);
      }, (err) => {
        this.paisesSugeridos = [];
      })
  }

  buscarSugerido( termino : string ) {
    this.buscar(termino)

  }

}
