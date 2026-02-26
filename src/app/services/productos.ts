import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  obtenerPlanes() {
    return [
      {
        nombre: 'Plan Básico',
        precio: 800000,
        meses: 5,
        destacado: false,
        imagen: 'basico.jpg'
      },
      {
        nombre: 'Plan Premium',
        precio: 1200000,
        meses: 8,
        destacado: true,
        imagen: 'premium.jpg'
      },
      {
        nombre: 'Plan Elite',
        precio: 1800000,
        meses: "Sin limite de",
        destacado: false,
        imagen: 'elite.jpg'
      }
    ];
  }


}
