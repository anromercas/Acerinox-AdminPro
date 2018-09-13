import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Sdr } from '../../models/sdr.model';
import { SdrService } from '../../services/service.index';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';
import { DatePipe } from '@angular/common';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-sdr',
  templateUrl: './sdr.component.html',
  styles: []
})
export class SdrComponent implements OnInit {

   sdr: Sdr = new Sdr('', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', 0);
  // sdr: Sdr;
  today: number = Date.now();
   fecha = new DatePipe('');
  forma: FormGroup;
  id: string;

  constructor(
    public _sdrService: SdrService,
    public _usuarioService: UsuarioService,
    private _router: Router,
    public _modalUploadService: ModalUploadService,
    public activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe( params => {
      this.id = params['id'];
      if (this.id !== 'nuevo') {
        this.cargarSdr(this.id);
      }
    });
  }

  ngOnInit() {
    console.log(this.fecha.transform);

    /* if ( this.id === 'nuevo' ) {
      console.log(this.id);
      this.forma.get('estado').setValue('BORRADOR');
    } */

    this._modalUploadService.notificacion
    .subscribe( resp =>  {
      this.sdr.img = resp.sdr.img;
    });

    this.forma = new FormGroup({
      nombre: new FormControl( null, Validators.required ),
      estado: new FormControl( null, Validators.required ),
      descripcion: new FormControl( null, Validators.required ),
      fecha: new FormControl( null, [Validators.required] ),
      grupo: new FormControl( null, Validators.required ),
      departamento: new FormControl( null, Validators.required ),
      zona: new FormControl( null, Validators.required ),
      probabilidad: new FormControl( null, Validators.required ),
      exposicion: new FormControl( null, Validators.required ),
      gravedad: new FormControl( null, Validators.required ),
      poblacion_en_riesgo: new FormControl( null, Validators.required ),
      visibilidad: new FormControl( null, Validators.required ),
      concreto: new FormControl( null, Validators.required ),
      coste: new FormControl( null, Validators.required )
  });

  this.forma.setValue({
      nombre: 'Test ',
      estado: 'BORRADOR',
      descripcion: 'Test ',
      fecha: Date().toLocaleLowerCase(),
      grupo: '5b962b343ec55f42c0218d32',
      departamento: 'ACERIA',
      zona: 'Test ',
      probabilidad: 'ESCASA',
      exposicion: 'ALTA',
      gravedad: 'CATASTROFE',
      poblacion_en_riesgo: 'MENOS DE 50',
      visibilidad: 'ALTA',
      concreto: 'Si',
      coste: 1000
  });
  }

  cambiarImagen() {
    this._modalUploadService.mostarModal( 'sdrs' , this.sdr._id);
  }

  cargarSdr(id: string) {
    this._sdrService.obtenerSdr( id )
                    .subscribe( sdr => {
                      this.sdr = sdr;
                      this.forma.get('nombre').setValue(this.sdr.nombre);
                      this.forma.get('descripcion').setValue(this.sdr.descripcion);
                      this.forma.get('estado').setValue(this.sdr.estado);
                      this.forma.get('fecha').setValue(this.sdr.fecha);
                      this.forma.get('grupo').setValue(this.sdr.grupo);
                      this.forma.get('departamento').setValue(this.sdr.departamento);
                      this.forma.get('zona').setValue(this.sdr.zona);
                      this.forma.get('probabilidad').setValue(this.sdr.probabilidad);
                      this.forma.get('exposicion').setValue(this.sdr.exposicion);
                      this.forma.get('gravedad').setValue(this.sdr.gravedad);
                      this.forma.get('poblacion_en_riesgo').setValue(this.sdr.poblacion_en_riesgo);
                      this.forma.get('visibilidad').setValue(this.sdr.visibilidad);
                      this.forma.get('concreto').setValue(this.sdr.concreto);
                      this.forma.get('coste').setValue(this.sdr.coste);

                    });

  }

  guardarSdr() {

    let valor = this.forma.value;
    this.sdr = new Sdr(
      this.id,
      valor.zona,
      valor.grupo,
      valor.nombre,
      valor.descripcion,
      valor.probabilidad,
      valor.exposicion,
      valor.gravedad,
      valor.poblacion_en_riesgo,
      valor.visibilidad,
      valor.concreto,
      this._usuarioService.usuario._id,
      valor.estado, valor.fecha,
      valor.departamento,
      valor.coste
    );
    console.log(this.forma.value.fecha);

    this._sdrService.crearSdr( this.sdr )
                    .subscribe( sdr => {
                      this.sdr._id = sdr._id;
                      this._router.navigate(['/sdrs']);
                    });
  }

}
