import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { planItem } from "../../business/planModel";
import { Storage } from '@ionic/storage';

/*
  Generated class for the PlanServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PlanServicesProvider {

  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Hello PlanServicesProvider Provider');
  }

  setDefaultDate() {
    let planList: planItem[];
    planList = [
      {
        id: 1,
        imgUrl: '../assets/imgs/ionic.jpg',
        title: 'Ionic Video',
        subTitle: '学习',
        planDetail: [
          {
            icon: 'sad',
            title: 'Status',
            color: 'danger',
            value: 'unfinished'
          },
          {
            icon: 'alarm',
            title: 'End Time',
            color: 'danger',
            value: '2018-08-07'
          }
        ]
      },
      {
        id: 2,
        imgUrl: '../assets/imgs/sports.jpg',
        title: 'Sport',
        subTitle: '健身',
        planDetail: [
          {
            icon: 'happy',
            title: 'Status',
            color: 'primary',
            value: 'finished'
          },
          {
            icon: 'alarm',
            title: 'End Time',
            color: 'primary',
            value: '2018-08-10'
          }
        ]
      },
      {
        id: 3,
        imgUrl: '../assets/imgs/ai.jpg',
        title: 'Artificial Intelligence',
        subTitle: 'AI',
        planDetail: [
          {
            icon: 'bicycle',
            title: 'Status',
            color: 'secondary',
            value: 'ongoing'
          },
          {
            icon: 'alarm',
            title: 'End Time',
            color: 'secondary',
            value: '2018-08-07'
          }
        ]
      }
    ];

    this.storage.set('planDate', planList);
  }

  getPlanList(): any {

    return new Promise((resolve, reject) => {
      this.storage.get('planDate').then((val) => {
        resolve(val);
      });
    });
  }

}
