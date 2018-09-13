import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ModalUploadService } from '../components/modal-upload/modal-upload.service';
import { AdminGuard } from './guards/admin.guard';
import {
  SidebarService,
  SharedService,
  UsuarioService,
  LoginGuard,
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
    SubirArchivoService,
    ModalUploadService,
    SdrService,
    IdealService
  ],
  declarations: []
})
export class ServiceModule { }
