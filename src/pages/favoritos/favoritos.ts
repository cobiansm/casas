import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FavoritosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favoritos',
  templateUrl: 'favoritos.html',
})
export class FavoritosPage {
carrito = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.carrito = this.navParams.get('carrito');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritosPage');
  }

   clickEliminar(c) {
     let index = this.carrito.findIndex(c => c.nombre == c.nombre);
     if (index >= 0) {
       this.carrito.splice(index, 1);
     }
   }
}
