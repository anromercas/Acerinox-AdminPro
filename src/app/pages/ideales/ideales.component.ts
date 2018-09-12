import { Component, OnInit } from '@angular/core';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';
import { IdealService } from '../../services/service.index';
import { Ideal } from '../../models/ideal.model';

declare var swal: any;

@Component({
  selector: 'app-ideales',
  templateUrl: './ideales.component.html',
  styles: []
})
export class IdealesComponent implements OnInit {

  ideales: Ideal[] = [];
  desde: number = 0;
  cargando: boolean = true;

  totalRegistros: number = 0;

  constructor( public _idealService: IdealService,
    public _modalUploadService: ModalUploadService) { }

  ngOnInit() {
    this.cargarIdeales();

    this._modalUploadService.notificacion
                            .subscribe( resp => this.cargarIdeales() );
  }

  mostrarModal( id: string ) {
    this._modalUploadService.mostarModal( 'ideales' , id);
  }

  cargarIdeales() {
    this.cargando = true;
    this._idealService.cargarIdeales( this.desde )
                        .subscribe( (resp: any) => {
                          this.totalRegistros = resp.total;
                          this.ideales = resp.ideales;
                          this.cargando = false;
                        });
  }

  cambiarDesde( valor: number ) {
    let desde = this.desde + valor;

    if ( desde >= this.totalRegistros ) {
      return;
    }

    if ( desde < 0 ) {
      return;
    }

    this.desde += valor;
    this.cargarIdeales();
  }

  buscarSdr( termino: string ) {
    if ( termino.length <= 0 ) {
      this.cargarIdeales();
      return;
    }

    this.cargando = true;
    this._idealService.buscarIdeal( termino )
                        .subscribe( (ideales: Ideal[]) => {
                            this.ideales = ideales;
                            this.cargando = false;

    });
  }

  borrarIdeal( ideal: Ideal ) {

    swal({
      title: '¿Está seguro?',
      text: 'Está a punto de borrar la SDR con el nombre: ' + ideal.nombre ,
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
    .then( borrar => {

      if (borrar) {
          this._idealService.borrarIdeal( ideal._id )
                              .subscribe( borrado => {
                                  console.log( borrado );
                                  this.cargarIdeales();
                              });
      }
    });
  }

  guardarIdeal( ideal: Ideal ) {
    this._idealService.actualizarIdeal( ideal )
                        .subscribe();
  }

}
