import { Departamentos } from './../estructuras';
import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css']
})
export class GraficasComponent implements OnInit {

  valoresMongo: number[] = new Array();
  etiquetasMongo: string[] = new Array();
  // Grafica de pie--------------------------------------------------------------------------------------------------------------------
  public tipoPie = 'pie';

  public setDatosPie: Array<any> = [
    { data: this.valoresMongo, label: 'Casos por departamento' }
  ];

  public labelsPie: Array<any> = this.etiquetasMongo;

  public coloresPie: Array<any> = [
    {
      backgroundColor: ['#ffed78', '#fffb00', '#ff0000', '#d94c61', '#ff85c2', '#b0047c', '#990b52', '#FDB45C', '#ff9100', '#003cff',
      '#00ccff', '#46BFBD', '#00f7c1', '#4300f7', '#00ff55', '#009431', '#cf8065', '#8f4228', '#949FB1', '#756d6a', '#4D5360', '#292523'],
      hoverBackgroundColor: ['#f7eda8', '#f2f06f', '#f26f6f', '#db5a6d', '#e68cb9', '#cf1b98', '#ad1863', '#FFC870', '#f0c286', '#869ff0',
      '#95e2f5', '#5AD3D1', '#89f5dd', '#6262e3', '#52ff8b', '#459660', '#cc927e', '#8f5d4c', '#A8B3C5', '#968d89', '#616774', '#4d4846'],
      borderWidth: 2,
    }
  ];

  public opcionesPie: any = {
    responsive: true
  };
  // Grafica de barras-----------------------------------------------------------------------------------------------------------------
  valoresRedis: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  etiquetasRedis: string[] = ['0 - 10', '11 - 20', '21 - 30', '31 - 40', '41 - 50', '51 - 60', '61 - 70', '71 - 80', '81 - 90', '91 - 100', '100 en adelante'];
  public tipoBar = 'bar';

  public setDatosBar: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'My First dataset' }
  ];

  public labelsBar: Array<any> = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];

  public coloresBar: Array<any> = [
    {
      backgroundColor: [
        'rgb(255, 255, 153)',
        'rgb(255, 102, 102)',
        'rgb(255, 179, 236)',
        'rgb(255, 191, 128)',
        'rgb(51, 102, 255)',
        'rgb(179, 255, 255)',
        'rgb(187, 153, 255)',
        'rgb(204, 255, 204)',
        'rgb(121, 210, 121)',
        'rgb(153, 77, 0)',
        'rgb(51, 51, 51)'
      ],
      borderColor: [
        'rgb(255, 255, 0)',
        'rgb(255, 0, 0)',
        'rgb(255, 51, 204)',
        'rgb(255, 153, 51)',
        'rgb(0, 51, 204)',
        'rgb(102, 255, 255)',
        'rgb(153, 102, 255)',
        'rgb(153, 255, 153)',
        'rgb(51, 153, 51)',
        'rgb(102, 51, 0)',
        'rgb(0, 0, 0)'
      ],
      borderWidth: 2,
    }
  ];

  public opcionesBar: any = {
    responsive: true
  };

  constructor(private servicio: ServicioService) {
    this.actualizarMongo();
    this.actualizarRedis();
  }

  actualizarMongo(){
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
          this.valoresMongo[indice] = (this.valoresMongo[indice] + 1);
        }else {
          const insertar: Departamentos = {
            id: data[i].id,
            Departamento: data[i].Departamento,
            Cantidad: 1
          };
          temp.push(data[i].Departamento);
          arreglo.push(insertar);
          this.etiquetasMongo.push(data[i].Departamento);
          this.valoresMongo.push(1);
        }
      }
      this.labelsPie = this.etiquetasMongo;
      this.setDatosPie = [{ data: this.valoresMongo, label: 'Casos por departamento' }];
    });
  }

  actualizarRedis(){
    const temporal: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.servicio.obtenerClaves().subscribe(data => {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < data.length; i++) {
        this.servicio.obtenerEdades(data[i]).subscribe(data1 => {
          if (data1 >= 0 && data1 < 11) {
            temporal[0] = temporal[0] + 1;
          } else if (data1 >= 11 && data1 < 21) {
            temporal[1] = temporal[1] + 1;
          } else if (data1 >= 21 && data1 < 31) {
            temporal[2] = temporal[2] + 1;
          } else if (data1 >= 31 && data1 < 41) {
            temporal[3] = temporal[3] + 1;
          } else if (data1 >= 41 && data1 < 51) {
            temporal[4] = temporal[4] + 1;
          } else if (data1 >= 51 && data1 < 61) {
            temporal[5] = temporal[5] + 1;
          } else if (data1 >= 61 && data1 < 71) {
            temporal[6] = temporal[6] + 1;
          } else if (data1 >= 71 && data1 < 81) {
            temporal[7] = temporal[7] + 1;
          } else if (data1 >= 81 && data1 < 91) {
            temporal[8] = temporal[8] + 1;
          } else if (data1 >= 11 && data1 < 101) {
            temporal[9] = temporal[9] + 1;
          } else {
            temporal[10] = temporal[10] + 1;
          }
        }, error => {
          alert('Error al obtener los datos');
        });
      }
    }, error => {
      alert('Error al obtener los datos');
    });
    this.labelsBar = this.etiquetasRedis;
    this.valoresRedis = temporal;
    this.setDatosBar = [{ data: this.valoresRedis, label: 'Rangos de edades' }];
    // console.log(this.setDatosBar);
  }

  ngOnInit(): void {
  }

}
