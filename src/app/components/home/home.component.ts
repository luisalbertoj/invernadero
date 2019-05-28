import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { interval } from 'rxjs';
import {Chart } from 'chart.js';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public bolsasAzules: any = 0;
  public bolsasVerdes: any = 0;
  public bolsasGrises: any = 0;
  contador = 0;
  constructor(private _homeService: HomeService) {
    this.cargarBolsas();
   }

  ngOnInit() {
  }
  cargarBolsas() {
    this._homeService.cargarCantidadBolsas('AZUL')
    .subscribe(
      (response: any) => {
        this.bolsasAzules = response[0][0];
      },
      (error: any) => {
          console.log('Error', error);
      }
    );
    this._homeService.cargarCantidadBolsas('VERDE')
    .subscribe(
      (response: any) => {
        this.bolsasVerdes = response[0][0];
      },
      (error: any) => {
          console.log('Error', error);
      }
    );
    this._homeService.cargarCantidadBolsas('GRIS')
    .subscribe(
      (response: any) => {
        this.bolsasGrises = response[0][0];
        this.codigoGraficas();
      },
      (error: any) => {
          console.log('Error', error);
      }
    );
  }
  codigoGraficas() {
    const chart = new Chart( 'barChart', {
      // The type of chart we want to create
      type: 'bar',
     // The data for our dataset
      data: {
          labels: ['Bolsas Azules', 'Bolsas Verdes', 'Bolsas Grices'],
          datasets: [{
            label: 'Indice de Recoleccion de Bolsas',
            backgroundColor:  ['blue', 'green', 'gray'],
            data: [this.bolsasAzules, this.bolsasVerdes, this.bolsasGrises, 0]
          }]
      },
      // Configuration options go here
      options: {
        segmentShowStroke    : true,
        segmentStrokeColor   : '#fff',
        segmentStrokeWidth   : 2,
        percentageInnerCutout: 50, // This is 0 for Pie charts
        animationSteps       : 100,
        animationEasing      : 'easeOutBounce',
        animateRotate        : true,
        animateScale         : false,
        responsive           : true,
        // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
        maintainAspectRatio  : true,
      }
    });
    const myDoughnutChart = new Chart('pieChart', {
      type: 'doughnut',
      data: {
        labels: ['Bolsas Azules', 'Bolsas Verdes', 'Bolsas Grices'],
        datasets: [{
          label: 'Indice de Recoleccion de Bolsas',
          backgroundColor:  ['blue', 'green', 'gray'],
          data: [this.bolsasAzules, this.bolsasVerdes, this.bolsasGrises]
      }
      ]
    },
      options: {
        segmentShowStroke    : true,
        segmentStrokeColor   : '#fff',
        segmentStrokeWidth   : 2,
        percentageInnerCutout: 50, // This is 0 for Pie charts
        animationSteps       : 100,
        animationEasing      : 'easeOutBounce',
        animateRotate        : true,
        animateScale         : false,
        responsive           : true,
        // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
        maintainAspectRatio  : true,
      }
  });
  }
}
