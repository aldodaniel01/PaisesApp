import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl = 'https://restcountries.com/v3.1';

  public get httpParams() {
    return new HttpParams().set( 'fields', 'name,capital,currencies');
  }


  constructor( private http:HttpClient ) { }

  buscarPais( termino: string ) : Observable<Country[]> {

    const url = `${ this.apiUrl }/name/${ termino }`;

    return this.http.get<Country[]>(url);
  }

  buscarCapital( termino : string ) : Observable<Country[]> {

    const url = `${ this.apiUrl }/capital/${ termino }`;

    return this.http.get<Country[]>(url);
  }

  getPaisCodigo( id : string ) : Observable<Country[]> {

    const url = `${ this.apiUrl }/alpha/${ id }`;

    return this.http.get<Country[]>(url);
  }

  buscarRegion( region : string ) : Observable<Country[]> {

    const url = `${ this.apiUrl }/region/${ region }`;

    // return this.http.get<Country[]>(url, { params : this.httpParams});
    return this.http.get<Country[]>(url);
  }
}
