import { Injectable } from '@angular/core';
import { Ideal } from '../../models/ideal.model';
import { HttpClient } from '@angular/common/http';
import { SubirArchivoService } from '../subir-archivo/subir-archivo.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { URL_SERVICIOS } from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class IdealService {
  ideal: Ideal;
  totalSdrs: number = 0;

  constructor(
    public http: HttpClient,
    public _usuarioService: UsuarioService,
    public _subirArchivoService: SubirArchivoService
  ) {}

  cargarIdeales(desde: number = 0) {
    let url = URL_SERVICIOS + '/ideal?desde=' + desde;
    return this.http.get(url);
  }

  obtenerIdeal(id: string) {
    let url = URL_SERVICIOS + '/ideal/' + id;
    return this.http.get(url).map((resp: any) => resp.ideal);
  }

  borrarIdeal(id: string) {
    let url = URL_SERVICIOS + '/ideal/' + id;
    url += '?token=' + this._usuarioService.token;
    return this.http
      .delete(url)
      .map((resp: any) =>
        swal(
          'Solución Ideal Eliminada',
          'La Solución Ideal ha sido eliminada correctamente',
          'success'
        )
      );
  }

  crearIdeal(ideal: Ideal) {
    let url = URL_SERVICIOS + '/ideal';
    url += '?token= ' + this._usuarioService.token;

    return this.http.post(url, ideal).map((resp: any) => {
      swal(
        'Solución Ideal creada!',
        'La Solución Ideal se ha creado correctamente',
        'success'
      );
      return resp.ideal;
    });
  }

  buscarIdeal(termino: string) {
    let url = URL_SERVICIOS + '/busqueda/coleccion/ideales/' + termino;
    return this.http.get(url).map((resp: any) => resp.ideales);
  }

  actualizarIdeal(ideal: Ideal) {
    let url = URL_SERVICIOS + '/ideal/' + ideal._id;
    url += '?token=' + this._usuarioService.token;

    return this.http.put(url, ideal).map((resp: any) => {
      swal('Solución Ideal actualizada!', ideal.nombre, 'success');
      return resp.ideal;
    });
  }

  cambiarImagen(archivo: File, id: string) {
    this._subirArchivoService
      .subirArchivo(archivo, 'ideales', id)
      .then((resp: any) => {
        this.ideal.img = resp.sdr.img;
        swal('Imagen Actualizada', this.ideal.nombre, 'success');
        console.log(resp);
      })
      .catch(resp => {
        console.log(resp);
      });
  }
}
