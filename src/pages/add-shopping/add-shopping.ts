import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

/**
 * Generated class for the AddShoppingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'my-page',
  segment: 'some-path'
})
@Component({
  selector: 'page-add-shopping',
  templateUrl: 'add-shopping.html',
})
export class AddShoppingPage {

  item = {} as ShoppingItem;
  itemsRef: AngularFireList<ShoppingItem>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
    this.itemsRef = this.database.list('shopping-list');
    // database.list<ShoppingItem>('shopping-list').valueChanges().subscribe(console.log);
  }

  addShoppingItem(item: ShoppingItem){
    console.log(item);
    this.itemsRef.push({
      itemName: this.item.itemName,
      itemNumber: this.item.itemNumber,
      itemDate: this.item.itemDate
    });
    this.item = {} as ShoppingItem;
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddShoppingPage');
  }

}
