import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetallesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalles',
  templateUrl: 'detalles.html',
})
export class DetallesPage {
casa;
carrito = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.casa = this.navParams.get('casa');
    this.carrito = this.navParams.get('carrito');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallesPage');
  }

  Fav() {
    this.carrito.push(this.casa);
    this.navCtrl.pop();
  }

}
