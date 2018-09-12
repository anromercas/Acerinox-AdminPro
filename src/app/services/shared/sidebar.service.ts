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
        { titulo : 'Crear Situación de Riesgo', url: '/sdr' },
        { titulo : 'Crear Posible Solución', url: '/sdr' },
        { titulo : 'Listar Situaciones de Riesgo', url: '/sdr' },
        { titulo : 'Listar Posibles Soluciones', url: '/sdr' },
      ]
    },
    {
      titulo: 'Mantenimiento',
      icono: 'mdi mdi-folder-lock-open',
      submenu: [
        { titulo: 'Usuarios', url: '/usuarios' },
        { titulo : 'Crear Situación de Riesgo', url: '/sdr' },
        { titulo : 'Situaciones de Riesgo', url: '/sdrs' },
        { titulo : 'Soluciones Ideales', url: '/ideales' },
        { titulo : 'Soluciones Parciales', url: '/parciales' },
        { titulo : 'Soluciones Parches', url: '/parches' },
      ]
    }
  ];

  constructor() { }
}
