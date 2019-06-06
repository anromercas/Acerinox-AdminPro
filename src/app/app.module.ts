import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

 // Rutas
import { APP_ROUTES } from './app.routes';

// Modulos
import { SharedModule } from './shared/shared.module';

// temporal
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { PagesComponent } from './pages/pages.component';

// Servicios
import { ServiceModule } from './services/service.module';
import { PipesModule } from './pipes/pipes.module';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    // IdealComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    // PagesModule,
    ServiceModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    PipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
