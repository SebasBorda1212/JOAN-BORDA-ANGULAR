import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  obtenerPlanes() {
    return [
      { nombre: 'Plan Básico', precio: 800000, meses: 48, destacado: false },
      { nombre: 'Plan Premium', precio: 1200000, meses: 36, destacado: true },
      { nombre: 'Plan Elite', precio: 1800000, meses: 24, destacado: false }
    ];
  }

}
