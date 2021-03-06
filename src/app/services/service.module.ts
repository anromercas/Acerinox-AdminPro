import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ModalUploadService } from '../components/modal-upload/modal-upload.service';
import {
  SidebarService,
  SharedService,
  UsuarioService,
  LoginGuard,
  AdminGuard,
  VerificaTokenGuard,
  SubirArchivoService,
  SdrService,
  IdealService
 } from './service.index';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SidebarService,
    SharedService,
    UsuarioService,
    LoginGuard,
    AdminGuard,
    VerificaTokenGuard,
    SubirArchivoService,
    ModalUploadService,
    SdrService,
    IdealService
  ],
  declarations: []
})
export class ServiceModule { }
