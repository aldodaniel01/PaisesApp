import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styles: [
    `
    .small-flag {
      width: 50px !important;
    }

    `
  ]
})
export class PaisTablaComponent {
  @Input() paises: Country[] = []

}
