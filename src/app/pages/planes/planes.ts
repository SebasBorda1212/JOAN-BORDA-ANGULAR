import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosService, Plan } from '../../services/productos';

@Component({
  selector: 'app-planes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './planes.html',
  styleUrl: './planes.css',
})
export class Planes {

  planes: Plan[] = [];

  constructor(private productosService: ProductosService) {
    this.planes = this.productosService.getPlanes();
  }

}
