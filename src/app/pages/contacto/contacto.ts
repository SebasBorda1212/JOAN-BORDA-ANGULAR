import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {

  guardar(formData: any) {

    const datosJSON = JSON.stringify(formData, null, 2);

    const blob = new Blob([datosJSON], { type: 'application/json' });

    const url = window.URL.createObjectURL(blob);

    const enlace = document.createElement('a');
    enlace.href = url;
    enlace.download = 'contacto.json';
    enlace.click();

    window.URL.revokeObjectURL(url);
  }

}
