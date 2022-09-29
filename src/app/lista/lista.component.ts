import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  alumno=[{nombre:'Carlos',edad:25},{nombre:'Cristhian',edad:15},{nombre:'Paula',edad:12},{nombre:'Julieth',edad:21}];
  color="";
    constructor() { }
   ngOnInit(): void {
   }
   Clasi_age(alumno:number){
     this.color =(alumno>15)?'red':'blue';
   return this.color;
   }

}
