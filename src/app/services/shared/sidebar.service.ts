import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Tablero Principal', url: '/dashboard' },
        { titulo : 'Situaciones de Riesgo', url: '/sdr' },
        { titulo : 'Posibles Soluciones', url: '/sdr' }
      ]
    },
    {
      titulo: 'Mantenimiento',
      icono: 'mdi mdi-folder-lock-open',
      submenu: [
        { titulo: 'Usuarios', url: '/usuarios' },
        { titulo : 'Situaciones de Riesgo', url: '/sdr' },
        { titulo : 'Posibles Soluciones', url: '/soluciones' }
      ]
    }
  ];

  constructor() { }
}
