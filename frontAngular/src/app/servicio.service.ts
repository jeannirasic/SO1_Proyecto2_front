import { Estructura, Departamentos } from './estructuras';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  url = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }


  // Los metodos de mongo-------------------------------------------------------------------------------------------------------------------
  obtenerUsuarios(){
    return this.http.get<Estructura[]>(this.url + 'usuarios');
  }

  obtenerDepartamentos(){
    return this.http.get<Departamentos[]>(this.url + 'departamentos');
  }
  // Los metodos de redis-------------------------------------------------------------------------------------------------------------------

}