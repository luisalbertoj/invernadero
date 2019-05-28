import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, interval } from 'rxjs';
import { retry, catchError, flatMap } from 'rxjs/operators';
import * as _ from 'lodash';
import * as moment from 'moment';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _http: HttpClient,
    private router: Router) {

    }
    cargarCantidadBolsas(color: any) {
      return interval(5000).pipe(
        flatMap(
          () => {
            return this._http.get(
              'http://localhost:86/www/proyecto-reciclaje/api-reciclaje/BolsasController.php?metodo=cantidadBolsas&&color=' + color
            );
          })
        );
    }
    controlProceso(estado: any) {
    return this._http.get(
      'ruta_ del_ modulo _ wifi?estado=' + estado
    );
    }
}
