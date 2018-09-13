import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Rutas
import { PAGES_ROUTES } from './pages.routes';

// Modulos
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Pipes Module
import { PipesModule } from '../pipes/pipes.module';

// Componentes
import { DashboardComponent } from './dashboard/dashboard.component';
import { SdrComponent } from './sdrs/sdr.component';
import { PagesComponent } from './pages.component';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';
import { SdrsComponent } from './sdrs/sdrs.component';
import { IdealesComponent } from './ideales/ideales.component';
import { BusquedaComponent } from './busqueda/busqueda.component';


@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        SdrComponent,
        ProfileComponent,
        UsuariosComponent,
        ModalUploadComponent,
        SdrsComponent,
        IdealesComponent,
        BusquedaComponent
    ],
    exports: [
        PagesComponent,
        DashboardComponent,
        SdrComponent,
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        PipesModule,
        CommonModule,
        ReactiveFormsModule
        // ChartsModule
    ]
})

export class PagesModule { }
