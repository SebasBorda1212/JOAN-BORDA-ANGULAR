import { Injectable } from '@angular/core';

export interface Plan {
  id: number;
  nombre: string;
  precio: number;
  meses: number;
  descripcion: string;
  imagen: string;
  destacado: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private planes: Plan[] = [
    {
      id: 1,
      nombre: 'Plan Básico',
      precio: 800000,
      meses: 48,
      descripcion: 'Financiación flexible a largo plazo.',
      imagen: '/basico.jpg',
      destacado: false
    },
    {
      id: 2,
      nombre: 'Plan Premium',
      precio: 1200000,
      meses: 36,
      descripcion: 'Mejor equilibrio entre cuota y tiempo.',
      imagen: '/premium.jpg',
      destacado: true
    },
    {
      id: 3,
      nombre: 'Plan Elite',
      precio: 1800000,
      meses: 24,
      descripcion: 'Pago rápido con beneficios exclusivos.',
      imagen: '/elite.jpg',
      destacado: false
    }
  ];

  getPlanes(): Plan[] {
    return this.planes;
  }

}
