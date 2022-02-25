import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



export interface IAPICore{
  id            ?:  string
  concurrencia  ?:  boolean
  ruta          ?:  string
  funcion       ?:  string
  parametros    ?:  string
  protocolo     ?:  string
  retorna       ?:  boolean
  migrar        ?:  false
  modulo        ?:  string
  relacional    ?:  boolean
  valores       ?:  any
  coleccion     ?:  string
  version       ?:  string
  http          ?:  number
  https         ?:  number
  consumidores  ?:  string
  puertohttp    ?:  number
  puertohttps   ?:  number
  driver        ?:  string
  query         ?:  string
  metodo        ?:  string
  tipo          ?:  string
  prioridad     ?:  string
  logs          ?:  boolean
  descripcion   ?:  string
  entorno       ?:  string
  cache         ?:  number
  estatus       ?:  boolean
}


@Injectable({
  providedIn: 'root'
})
export class ApiService {
   //Dirección Get para servicios en la página WEB
   URL =  '/devel/api/'

   hash = environment.Hash

   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + sessionStorage.getItem('token') })
  };

  constructor( private http : HttpClient) {
    
  }

  
  //Ejecutar Api generales
  Ejecutar(xAPI : IAPICore) : Observable<any>{
    return this.http.post<any>(this.URL + "crud" + this.hash, xAPI, this.httpOptions);
  }



}
