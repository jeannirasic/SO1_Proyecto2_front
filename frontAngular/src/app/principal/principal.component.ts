import { Estructura, Departamentos } from './../estructuras';
import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  departamento1 = '';
  departamento2 = '';
  departamento3 = '';

  ultimoCaso: Estructura = {
    Nombre: '',
    Departamento: '',
    Edad: 0,
    Forma: '',
    Estado: ''
  };

  constructor(private servicio: ServicioService) {
    this.actualizarDepartamentos();
    this.actualizarCasos();
  }

  actualizarDepartamentos(){
    this.servicio.obtenerDepartamentos().subscribe(data => {
      const arreglo: Departamentos[] = new Array();
      const temp: string[] = new Array();
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < data.length; i++) {
        data[i].Cantidad = 1;
        const resultado = arreglo.find(valor => valor.Departamento === data[i].Departamento );
        if (resultado) {
          const indice = temp.indexOf(data[i].Departamento);
          arreglo[indice].Cantidad = (arreglo[indice].Cantidad + 1);
        }else {
          const insertar: Departamentos = {
            id: data[i].id,
            Departamento: data[i].Departamento,
            Cantidad: 1
          };
          temp.push(data[i].Departamento);
          arreglo.push(insertar);
        }
      }
      this.departamento1 = this.obtenerMayor(arreglo);
      this.departamento2 = this.obtenerMayor(arreglo);
      this.departamento3 = this.obtenerMayor(arreglo);
    }, error => {
      alert('Error al obtener los datos');
    });
  }

  actualizarCasos(){
    this.servicio.obtenerClaves().subscribe(data => {
      console.log(data);
      // tslint:disable-next-line:prefer-for-of
      /*for (let i = 0; i < data.length; i++) {
        this.servicio.obtenerUltimoCaso(data[i]).subscribe(data1 => {
          data1.Id = Number(data[i]);
          console.log(data1);
        });
      }*/
      const ultimo = this.obtenerUltimo(data);
      this.servicio.obtenerUltimoCaso(ultimo.toString()).subscribe(data1 => {
        this.ultimoCaso = data1;
      }, error => {
        alert('Error al obtener los datos');
      });
    }, error => {
      alert('Error al obtener los datos');
    });
  }

  obtenerUltimo(arreglo: string[]): number {
    let mayor = 0;
    const arrayOfNumbers = arreglo.map(Number);
    mayor = Math.max.apply(null, arrayOfNumbers);
    return mayor;
  }

  obtenerMayor(arreglo: Departamentos[]): string{
    let mayor = 0;
    let posicion = 0;
    let depto = '';
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < arreglo.length; i++) {
      if (arreglo[i].Cantidad > mayor){
        mayor = arreglo[i].Cantidad;
        posicion = i;
        depto = arreglo[i].Departamento;
      }
    }
    arreglo.splice(posicion, 1);
    return depto;
  }

  ngOnInit(): void {
  }

}
