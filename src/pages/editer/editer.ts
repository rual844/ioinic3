import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DetailComponent } from "../../components/detail/detail";
import { planItem } from "../../business/planModel";

/**
 * Generated class for the EditerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editer',
  templateUrl: 'editer.html',
})
export class EditerPage {

  // planObjA: detailObj[];
  // planObjB: detailObj[];
  // planObjC: detailObj[];
  planObj: any;
  planTitle: string;
  planItem: planItem;
  constructor(public navCtrl: NavController, public navParams: NavParams,
     public modalCtrl: ModalController) {
    this.planItem = this.navParams.get('planItem');
    this.planTitle = this.planItem.title;
    this.planObj = this.planItem.planDetail;
  }
  
  goToEditPage() {
    let editModal = this.modalCtrl.create(DetailComponent, {planTitle: this.planTitle,
       status: this.planObj[0].value,
        endLine: this.planObj[1].value});
    editModal.present();
    // this.navCtrl.push(DetailComponent);
  }

}
