import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';

/**
 * Generated class for the AddShoppingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-add-shopping',
  templateUrl: 'add-shopping.html',
})
export class AddShoppingPage {

  shoppingItem = {} as ShoppingItem;
  shoppingItmeRef$: AngularFireList<ShoppingItem>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
    this.shoppingItmeRef$ = this.database.list('shopping-list');
    // database.list<ShoppingItem>('shopping-list').valueChanges().subscribe(console.log);
  }

  addShoppingItem(shoppingItem: ShoppingItem){
    console.log(shoppingItem);
    this.shoppingItmeRef$.push({
      itemName: this.shoppingItem.itemName,
      itemNumber: this.shoppingItem.itemNumber
    });
    this.shoppingItem = {} as ShoppingItem;
    this.navCtrl.pop();
  }
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad AddShoppingPage');
  // }

}
