import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { planItem } from "../../business/planModel";
import { PlanServicesProvider } from "../../providers/plan-services/plan-services";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // private ibnUl: HTMLElement[];

  PlanList: planItem[];
  constructor(public navCtrl: NavController, public planServices: PlanServicesProvider,
  public loadingCtrl: LoadingController) {
    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: 'Please wait...'
    });
  
    loading.present();
  
    this.planServices.getPlanList().then(dateList=>{
      this.PlanList = dateList;
      loading.dismiss();
    });

  }

  actionDetail(selectItem) {
    this.navCtrl.push('EditerPage', {planItem: selectItem});
  }

  addPlan() {
    // this.planServices.addItem();
  }

}