import { ShoppingItem } from './../../models/shopping-item/shopping-item.interface';
import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular';
import { AddShoppingPage } from '../add-shopping/add-shopping';
import { EditShoppingPage } from '../edit-shopping/edit-shopping';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

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
  itemsRef: AngularFireList<ShoppingItem>;
  items: Observable<ShoppingItem[]>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private database: AngularFireDatabase,
    private actionSheetCtrl: ActionSheetController,
    private alertCtrl: AlertController
  ) {
    this.itemsRef = this.database.list('shopping-list');
    // Use snapshotChanges().map() to store the key
    this.items = this.itemsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  selectShoppingItem(item: ShoppingItem) {
    // alert(item.itemName);
    const actionSheet = this.actionSheetCtrl.create({
      title: `${item.itemName}`,
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            const alert = this.alertCtrl.create({
              title: 'Confirm delete',
              message: 'Do you want to delete ' + item.itemName,
              buttons: [
                {
                  text: 'No',
                  role: 'cancel',
                  handler: () => {
                    console.log('Cancel clicked');
                  }
                },
                {
                  text: 'Yes',
                  handler: () => {
                    this.itemsRef.remove(item.key);
                  }
                }
              ]
            });
            alert.present();
          }
        },
        {
          text: 'Edit',
          handler: () => {
            this.navCtrl.push(EditShoppingPage, { id: item.key });            
          }
        },
        {
          text: 'Alert',
          handler: () => {
            const alert = this.alertCtrl.create({
              title: item.itemName,
              subTitle: item.itemNumber + ' TK. per kilogram',
              buttons: ['Dismiss']
            });
            alert.present();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {

          }
        }
      ]
    });
    actionSheet.present();
  }

  navigateToAddShoppingPage() {
    this.navCtrl.push(AddShoppingPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShoppingListPage');
  }

}
