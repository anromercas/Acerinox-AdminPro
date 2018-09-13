import { RouterModule, Routes } from '@angular/router';

// Componentes
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { NofoundpageComponent } from './shared/nofoundpage/nofoundpage.component';
import { PagesComponent } from './pages/pages.component';
import { LoginGuard } from './services/service.index';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {
        path: '',
        component: PagesComponent,
        canActivate: [LoginGuard],
        loadChildren: './pages/pages.module#PagesModule'
    },
    { path: '**', component: NofoundpageComponent }
];


export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
