import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';

/**
 * Generated class for the EditShoppingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-edit-shopping',
  templateUrl: 'edit-shopping.html',
})
export class EditShoppingPage {
  private itemsRef;
  items: Observable<ShoppingItem[]>;
  item: Observable<any>;
  

  // constructor(
  //   public navCtrl: NavController,
  //   public navParams: NavParams,
  //   private database: AngularFireDatabase,
  //   private actionSheetCtrl: ActionSheetController,
  //   private alertCtrl: AlertController
  // ) {
  //   this.itemsRef = this.database.list('shopping-list');
  //   // Use snapshotChanges().map() to store the key
  //   this.items = this.itemsRef.snapshotChanges().map(changes => {
  //     return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
  //   });
  // }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private database: AngularFireDatabase
  ) {
    const itemId = this.navParams.get('id');    
    this.item = this.database.object(`shopping-list/${itemId}`).valueChanges();    
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad EditShoppingPage');
  // }

}
