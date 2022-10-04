import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent {
  alumno = [
    { nombre: 'Carlos', edad: 25 },
    { nombre: 'Cristhian', edad: 15 },
    { nombre: 'Paula', edad: 12 },
    { nombre: 'Julieth', edad: 21 },
  ];
  getClassPorEdad(alumno: number) {
    return alumno > 15 ? 'red' : 'blue';
  }
}
