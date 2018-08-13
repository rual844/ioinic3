import { Component } from '@angular/core';
import { NavParams, ViewController } from "ionic-angular";

/**
 * Generated class for the DetailComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'detail',
  templateUrl: 'detail.html'
})
export class DetailComponent {

  level: string;
  event: dateE;
  singleValue4: number;
  modal: NavParams;
  editTitle: string;
  endLine: string;
  statue: string;

  constructor(public navParams: NavParams, public viewCtrl: ViewController) {
    console.log('Hello DetailComponent Component');
    this.editTitle = this.navParams.get('planTitle');
    this.endLine = this.navParams.get('endLine');
    this.statue = this.navParams.get('status');
    if (this.statue === 'unfinished') {
      this.singleValue4 = Math.random() * 100;
    }
    this.level = 'low';
    this.event = {
      month : this.endLine
    };
  }

  
  dismiss() {
    
    this.viewCtrl.dismiss();
    
  }

}

class dateE {
    month: string;
}