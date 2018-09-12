import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Sdr } from '../../models/sdr.model';
import { SubirArchivoService } from '../subir-archivo/subir-archivo.service';

@Injectable({
  providedIn: 'root'
})
export class SdrService {

  sdr: Sdr;
  totalSdrs: number = 0;

  constructor(
    public http: HttpClient,
    public _usuarioService: UsuarioService,
    public _subirArchivoService: SubirArchivoService
  ) { }

  cargarSdrs( desde: number = 0 ) {
    let url = URL_SERVICIOS + '/sdr?desde=' + desde;
    return this.http.get( url );
  }

  cargaSdrs() {
    let url = URL_SERVICIOS + '/sdr';
    return this.http.get( url ).map( (resp: any) => resp.sdr );
  }

  obtenerSdr( id: string ) {

    let url = URL_SERVICIOS + '/sdr/' + id;
    return this.http.get( url )
                    .map( (resp: any) => resp.sdr);
  }

  borrarSdr( id: string ) {
    let url = URL_SERVICIOS + '/sdr/' + id;
        url += '?token=' + this._usuarioService.token;
      return this.http.delete( url )
                      .map( (resp: any) => swal('Sdr Eliminado', 'La situacion de riesgo ha sido eliminada correctamente', 'success'));
  }

  crearSdr( sdr: Sdr ) {
    let url = URL_SERVICIOS + '/sdr';

    if ( sdr._id  ) {
      // actualizando
      url += '/' + sdr._id;
      url += '?token=' + this._usuarioService.token;

      return this.http.put( url, sdr )
                      .map( (resp: any) => {
                        swal('SDR modificada!', 'La situación de Riesgo ' + sdr.nombre + ' se ha modificado correctamente', 'success');
                        return resp.sdr;
                      });
    } else {
      // creando
      url += '?token=' + this._usuarioService.token;

      return this.http.post( url, sdr )
                          .map( (resp: any) => {
                            swal('SDR creada!', 'La situación de Riesgo se ha creado correctamente', 'success');
                            return resp.sdr;
                          });
    }
  }

  buscarSdr( termino: string ) {
    let url = URL_SERVICIOS + '/busqueda/coleccion/sdrs/' + termino;
    return this.http.get( url )
                    .map( (resp: any) => resp.sdrs );
  }

  actualizarSdr( sdr: Sdr ) {
    let url = URL_SERVICIOS + '/sdr/' + sdr._id;
    url += '?token=' + this._usuarioService.token;

    return this.http.put( url, sdr )
                    .map( (resp: any) => {
                      swal('SDR actualizada!', sdr.nombre , 'success');
                      return resp.sdr;
                    });
  }

  cambiarImagen( archivo: File, id: string ) {
    this._subirArchivoService.subirArchivo( archivo, 'sdrs', id )
                              .then( (resp: any) => {
                                this.sdr.img = resp.sdr.img;
                                swal( 'Imagen Actualizada', this.sdr.nombre, 'success' );
                                console.log(resp);
                              })
                              .catch( resp => {
                                console.log(resp);
                              });
}

}
