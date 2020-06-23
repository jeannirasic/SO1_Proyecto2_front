import { Estructura } from './../estructuras';
import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(private servicio: ServicioService) {
  }

  departamento1 = 'Guatemala';
  departamento2 = 'Jalapa';
  departamento3 = 'Escuintla';

  ultimoCaso: Estructura = {
    Nombre: 'Juan Perez',
    Departamento: 'Guatemala',
    Edad: 30,
    Forma: 'Comunitario',
    Estado: 'Activo'
  };

  ngOnInit(): void {
  }

}
