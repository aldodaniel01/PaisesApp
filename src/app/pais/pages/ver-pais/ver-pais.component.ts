import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators'
import { Country } from '../../interfaces/pais.interfaces';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  paisRoute! : Country;

  constructor(
    private activeRoute: ActivatedRoute,
    private paisService : PaisService ) {}

  ngOnInit(): void {

    this.activeRoute.params
    .pipe(

      switchMap( ( { id } ) => this.paisService.getPaisCodigo( id )),
      tap( console.log )
    )
    .subscribe( (pais) => {
      this.paisRoute = pais[0];

      console.log(this.paisRoute)
    });

    // this.activeRoute.params
    //   .subscribe( ({ id }) => {

    //     console.log( id );

    //     this.paisService.getPaisCodigo( id )
    //       .subscribe( (pais) => {
    //         console.log(pais);

    //         this.pais = pais;
    //       })
    //   })
  }

  // imprimeData() : void{
  //   const id : string = this.activeRoute.snapshot.paramMap.get('id')!;

  //   this.paisService.getPaisCodigo( id )
  //     .subscribe( pais => {
  //       this.paisRoute = pais[0];

  //       console.log(this.paisRoute.name.common)
  //     });
  // }

}
