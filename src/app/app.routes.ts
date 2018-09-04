import { RouterModule, Routes } from '@angular/router';

// Componentes
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { NofoundpageComponent } from './shared/nofoundpage/nofoundpage.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', component: NofoundpageComponent }
];


export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
