import { NgModule } from '@angular/core';

// Rutas
import { PAGES_ROUTES } from './pages.routes';

// Modulos
import { SharedModule } from '../shared/shared.module';

// Pipes Module
import { PipesModule } from '../pipes/pipes.module';

// Componentes
import { DashboardComponent } from './dashboard/dashboard.component';
import { SdrComponent } from './sdr/sdr.component';
import { PagesComponent } from './pages.component';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        SdrComponent,
        ProfileComponent,
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
        CommonModule
        // ChartsModule
    ]
})

export class PagesModule { }
