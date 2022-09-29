import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent {
  alumnos = [
    { nombre: 'Carlos', edad: 25 },
    { nombre: 'Cristhian', edad: 15 },
    { nombre: 'Paula', edad: 12 },
    { nombre: 'Julieth', edad: 21 },
  ];
  constructor() {}
  getClassPorEdad(alumno: number): string {
    return alumno > 15 ? 'red' : 'blue';
  }
}
