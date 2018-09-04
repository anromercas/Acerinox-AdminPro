import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { NofoundpageComponent } from './shared/nofoundpage/nofoundpage.component';
import { PagesComponent } from './pages/pages.component';
import { SdrComponent } from './pages/sdr/sdr.component';



const appRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'sdr', component: SdrComponent },
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', component: NofoundpageComponent }
];


export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
