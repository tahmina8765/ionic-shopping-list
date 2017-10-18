import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AddShoppingPage } from '../add-shopping/add-shopping';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';
/**
 * Generated class for the ShoppingListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {
  afList = [];
  shoppingListRef$: AngularFireList<ShoppingItem>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
    const afList = this.database.list('shopping-list'); 
    // this.shoppingListRef$ = this.database.list('shopping-list'); 
    // this.shoppingListRef$.snapshotChanges().subscribe();
    
  }

  navigateToAddShopping(){
    this.navCtrl.push(AddShoppingPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShoppingListPage');
  }

}
