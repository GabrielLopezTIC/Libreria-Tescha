import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

librosDestacados:any[] = [
  {clave: "apocalipsis.jpg", texto: "Apocalipsis",info: "Libro sobre el apocalipsis"},
  {clave: "carrie.jpg", texto: "Carrie",info: ""},
  {clave: "cumbres.jpg", texto: "Cumbres\nBorrascosas",info: ""},
  {clave: "don-quijote.jpg", texto: "Don quijote\n de la mancha",info: ""},
  {clave: "el-principe.jpg", texto: "El principe",info: ""},
  {clave: "frankestein.jpg", texto: "Frankenstein",info: ""},
  {clave: "hamlet.jpg", texto: "Hamlet",info: ""},
  {clave: "juegos-hambre.jpg", texto: "Los juegos del hambre",info: ""}
];

librosUltimos:any[] = [
  {clave: "lazarillo.jpg", texto: "El lazarillo de las torres",info: ""},
  {clave: "michael.jpg", texto: "El mundo\nperdido",info: ""},
  {clave: "nombre-rosa.jpg", texto: "El nombre de\nlas rosas",info: ""},
  {clave: "orgullo-prej.jpg", texto: "Orgullo y\nprejuicio",info: ""},
  {clave: "principito.jpg", texto: "El principito",info: ""},
  {clave: "sherlock-holmes.jpg", texto: "Sherlock Holmes",info: ""}
];


librosLateral:any[] =[
  {clave: "tierra-luna.jpg", texto: "De la tierra\na la luna",info: ""},
  {clave: "viaje-submarino.jpg", texto: "Veinte mil\leguas de viaje\submarino",info: ""}
];




  constructor() { }

  ngOnInit(): void {
  }

}
