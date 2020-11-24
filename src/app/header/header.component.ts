import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  generosLibros:string[] = ["Todos","Aventuras","Ciencia Ficcion","Diccionarios","Terror","Romance","Zoologia"];
  opcionesBarra: any[] = [
    { link: "specil_offer.html" , texto: "Ofertas especiales"},
    { link: "normal.html" , texto: "Entrega"},
    { link: "contact.html" , texto: "Contacto"}   ];

  constructor() { }

  ngOnInit(): void {
  }

}
