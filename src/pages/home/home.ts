import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CompileNgModuleMetadata } from '@angular/compiler';
import { DetallesPage } from '../detalles/detalles';
import { FavoritosPage } from '../favoritos/favoritos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
detail = DetallesPage;
Fav = FavoritosPage;
carrito = [];

  casas=[
    {
      id: 0,
      imagen:'../assets/castillo1.jpg',
      nombre:'Castillo en Condado Castilnovo',
      ubicacion: 'Carretera Sg 205, km 15; Cantalejo, Segovia',
      precio:'15.000.000€',
      cuartos: '21',
      bathroom: '24',
      plantas: '5'
    },

    {
      id: 1,
      imagen:'../assets/castillo2.jpg',
      nombre:'Castillo en Normandía',
      ubicacion: 'Bât H, rue Albert Einstein 53810',
      precio:'1.300.000€',
      cuartos: '21',
      bathroom: '24',
      plantas: '6'
    },

    {
      id: 2,
      imagen:'../assets/castillo1.jpg',
      nombre:'Castillo en Condado Castilnovo',
      ubicacion: 'Carretera Sg 205, km 15; Cantalejo, Segovia',
      precio:'15.000.000€',
      cuartos: '21',
      bathroom: '24',
      plantas: '5'
    },
  ]

  constructor(public navCtrl: NavController) {

  }

  verCasa(c) {
    this.navCtrl.push(this.detail, {casa: c, carrito: this.carrito});
  }

  Favoritos() {
    this.navCtrl.push(this.Fav, {carrito: this.carrito});
  }

}
