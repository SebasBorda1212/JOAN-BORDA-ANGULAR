import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Productos } from './pages/productos/productos';
import { Planes } from './pages/planes/planes';
import { Contacto } from './pages/contacto/contacto';

export const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'productos', component: Productos },
  { path: 'planes', component: Planes },
  { path: 'contacto', component: Contacto },
  { path: '**', redirectTo: '' } // fallback para cualquier ruta no existente
];
