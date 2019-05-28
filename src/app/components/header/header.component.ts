import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _homeService: HomeService) { }

  ngOnInit() {
  }
  activar() {
    const num: any = {};
    const estado: any = document.getElementById('estado');
    num.value = 'tustu';
    if (num.value === 'tustu') {
      if (estado.value === '0') {
          swal(
            'ok!!',
            'El Equipo esta encendido!',
            'success'
          );
          document.getElementById('bombillo').style.color = 'yellow';
          estado.value = '1';
          this._homeService.controlProceso(estado).subscribe(
            (response: any) => {
              console.log(response);
            },
            (error: any) => {
              console.log(error);
            }
          );
      } else {
          swal('ok!', 'El equipo esta apagado!', 'success');
          document.getElementById('bombillo').style.color = 'white';
          estado.value = '0';
          this._homeService.controlProceso(estado).subscribe(
            (response: any) => {
              console.log(response);
            },
            (error: any) => {
              console.log(error);
            }
          );
      }
      num.value = '';
    } else {
      swal('Error!', 'Contraseña incorrecta!', 'warning');
    }
  }
}
