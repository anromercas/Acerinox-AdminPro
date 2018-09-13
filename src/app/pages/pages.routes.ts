import { LoginGuard } from '../services/guards/login.guard';
import { AdminGuard } from '../services/guards/admin.guard';

import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SdrComponent } from './sdrs/sdr.component';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { SdrsComponent } from './sdrs/sdrs.component';
import { IdealComponent } from './ideales/ideal.component';
import { IdealesComponent } from './ideales/ideales.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { VerificaTokenGuard } from '../services/guards/verifica-token.guard';


const pagesRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [VerificaTokenGuard],
        data: { titulo: 'Tablero' }
    },
    { path: 'sdr', component: SdrComponent, data: { titulo: 'Situaciones de Riesgo' } },
    { path: 'perfil', component: ProfileComponent, data: { titulo: 'Perfil de Usuario' } },
    { path: 'busqueda/:termino', component: BusquedaComponent, data: { titulo: 'Buscador' } },
    // Mantenimiento
    {
        path: 'usuarios',
            component: UsuariosComponent,
            canActivate: [ AdminGuard ],
        data: { titulo: 'Mantenimiento de Usuarios' }
    },
    { path: 'sdrs', component: SdrsComponent, data: { titulo: 'Mantenimiento de Situaciones de Riesgo' } },
    { path: 'sdr/:id', component: SdrComponent, data: { titulo: 'Crear Situación de Riesgo' } },
    { path: 'ideales', component: IdealesComponent, data: { titulo: 'Mantenimiento de Soluciones de Ideales' } },
    { path: 'ideal/:id', component: IdealComponent, data: { titulo: 'Crear Solución de Ideal' } },
    { path: 'parciales', component: SdrsComponent, data: { titulo: 'Mantenimiento de Soluciones de Parciales' } },
    { path: 'parches', component: SdrsComponent, data: { titulo: 'Mantenimiento de Soluciones de Parches' } },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
