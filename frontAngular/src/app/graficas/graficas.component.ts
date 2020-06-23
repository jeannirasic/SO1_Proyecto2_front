import { Component, OnInit } from '@angular/core';
import { Departamentos } from '../estructuras';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css']
})
export class GraficasComponent implements OnInit {

  departamentos: Departamentos[] = new Array();

  // Grafica de pie--------------------------------------------------------------------------------------------------------------------
  public tipoPie = 'pie';

  public setDatosPie: Array<any> = [
    { data: [300, 50, 100, 40, 120], label: 'My First dataset' }
  ];

  public labelsPie: Array<any> = ['Red', 'Green', 'Yellow', 'Grey', 'Dark Grey'];

  public coloresPie: Array<any> = [
    {
      backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
      borderWidth: 2,
    }
  ];

  public opcionesPie: any = {
    responsive: true
  };
  // Grafica de barras-----------------------------------------------------------------------------------------------------------------
  public tipoBar = 'bar';

  public setDatosBar: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'My First dataset' }
  ];

  public labelsBar: Array<any> = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];

  public coloresBar: Array<any> = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 2,
    }
  ];

  public opcionesBar: any = {
    responsive: true
  };

  constructor() { }

  ngOnInit(): void {
  }

  public pieClicked(e: any): void { }
  public pieHovered(e: any): void { }

  public barClicked(e: any): void { }
  public barHovered(e: any): void { }

}
