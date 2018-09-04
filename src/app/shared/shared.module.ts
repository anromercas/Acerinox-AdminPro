import { NgModule } from '@angular/core';

// componentes
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { NofoundpageComponent } from './nofoundpage/nofoundpage.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
    declarations: [
       BreadcrumbsComponent,
       HeaderComponent,
       NofoundpageComponent,
       SidebarComponent
    ],
    exports: [
       BreadcrumbsComponent,
       HeaderComponent,
       NofoundpageComponent,
       SidebarComponent
    ]
})

export class SharedModule { }
