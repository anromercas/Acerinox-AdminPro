import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { Usuario } from '../../models/usuario.model';
import { Sdr } from '../../models/sdr.model';
import { Ideal } from '../../models/ideal.model';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: []
})
export class BusquedaComponent implements OnInit {

  usuarios: Usuario[] = [];
  sdrs: Sdr[] = [];
  ideales: Ideal[] = [];

  cargando: boolean = true;

  constructor(
    public activatedRoute: ActivatedRoute,
    public http: HttpClient
  ) {
    activatedRoute.params.subscribe( params => {
        let termino = params['termino'];
        this.buscar(termino);
    });
   }

  ngOnInit() {
  }

  buscar( termino: string ) {
    let url = URL_SERVICIOS + '/busqueda/todo/' + termino;
    this.http.get( url ).subscribe( (resp: any) => {
      console.log(resp);
      this.usuarios = resp.usuarios;
      this.sdrs = resp.sdrs;
      this.cargando = false;
    });
  }

}
