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
fav = FavoritosPage;
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
      imagen:'../assets/castillo3.jpg',
      nombre:'Castillo en Laval, Francia',
      ubicacion: 'Laval, Pays de la Loire, Francia',
      precio:'1.690.000€',
      cuartos: '12',
      bathroom: '8',
      plantas: '3'
    },

    {
      id: 3,
      imagen:'../assets/castillo4.jpg',
      nombre:'Castillo en Burdeos, Francia',
      ubicacion: 'Burdeos, Nueva Aquitania, Francia',
      precio:'2.830.000€',
      cuartos: '20',
      bathroom: '9',
      plantas: '2'
    },

    {
      id: 4,
      imagen:'../assets/castillo5.jpg',
      nombre:'Castillo en Cannes, Francia',
      ubicacion: 'Cannes, Costa Azul, Francia',
      precio:'Precio a consultar',
      cuartos: '15',
      bathroom: '9',
      plantas: '5'
    },

    {
      id: 5,
      imagen:'../assets/castillo6.jpg',
      nombre:'Castillo en Nantes, Francia',
      ubicacion: 'Nantes, Pays de la Loire, Francia',
      precio:'2.400.000€',
      cuartos: '25',
      bathroom: '15',
      plantas: '4'
    },

    {
      id: 6,
      imagen:'../assets/castillo7.jpg',
      nombre:'Castillo en Tours, Francia',
      ubicacion: 'Tours, Centro-Valle de Loira, Francia',
      precio:'2.515.000€',
      cuartos: '23',
      bathroom: '15',
      plantas: '3'
    },

    {
      id: 7,
      imagen:'../assets/castillo8.jpg',
      nombre:'Castillo en Hessen, Alemania',
      ubicacion: 'Königstein im Taunus, Hessen, Alemania',
      precio:'4.950.000€',
      cuartos: '12',
      bathroom: '3',
      plantas: '3'
    },

    {
      id: 8,
      imagen:'../assets/castillo9.jpg',
      nombre:'Villa en Berlín, Alemania',
      ubicacion: 'Tempelhof-Schöneberg, Berlín, Alemania',
      precio:'4.900.000€',
      cuartos: '3',
      bathroom: '2',
      plantas: '4'
    },

    {
      id: 9,
      imagen:'../assets/castillo10.jpg',
      nombre:'Villa en Baden, Alemania',
      ubicacion: 'Baden-Baden, Baden-Wurtemberg, Alemania',
      precio:'3.600.000€',
      cuartos: '5',
      bathroom: '4',
      plantas: '2'
    },
    
  ]
  

  constructor(public navCtrl: NavController) {

  }

  verCasa(c) {
    this.navCtrl.push(this.detail, {casa: c, carrito: this.carrito});
  }

  Favoritos() {
    this.navCtrl.push(this.fav, {carrito: this.carrito});
  }

}
