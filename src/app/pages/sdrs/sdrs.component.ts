import { Component, OnInit } from '@angular/core';
import { Sdr } from '../../models/sdr.model';
import { SdrService } from '../../services/service.index';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';

declare var swal: any;

@Component({
  selector: 'app-sdrs',
  templateUrl: './sdrs.component.html',
  styles: []
})
export class SdrsComponent implements OnInit {

  sdrs: Sdr[] = [];
  desde: number = 0;
  cargando: boolean = true;

  totalRegistros: number = 0;

  constructor( public _sdrService: SdrService,
    public _modalUploadService: ModalUploadService ) {

   }

  ngOnInit() {
    this.cargarSdrs();

    this._modalUploadService.notificacion
                            .subscribe( resp => this.cargarSdrs() );
  }

  mostrarModal( id: string ) {
    this._modalUploadService.mostarModal( 'sdrs' , id);
  }

  cargarSdrs() {
    this.cargando = true;
    this._sdrService.cargarSdrs( this.desde )
                        .subscribe( (resp: any) => {
                          this.totalRegistros = resp.total;
                          this.sdrs = resp.sdrs;
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
    this.cargarSdrs();
  }

  buscarSdr( termino: string ) {
    if ( termino.length <= 0 ) {
      this.cargarSdrs();
      return;
    }

    this.cargando = true;
    this._sdrService.buscarSdr( termino )
                        .subscribe( (sdrs: Sdr[]) => {
                            this.sdrs = sdrs;
                            this.cargando = false;

    });
  }

  borrarSdr( sdr: Sdr ) {

    swal({
      title: '¿Está seguro?',
      text: 'Está a punto de borrar la SDR con el nombre: ' + sdr.nombre ,
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
    .then( borrar => {

      if (borrar) {
          this._sdrService.borrarSdr( sdr._id )
                              .subscribe( borrado => {
                                  console.log( borrado );
                                  this.cargarSdrs();
                              });
      }
    });
  }

  guardarSdr( sdr: Sdr ) {
    this._sdrService.actualizarSdr( sdr )
                        .subscribe();
  }

}
