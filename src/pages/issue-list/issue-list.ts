import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { IssueDetailsPage } from '../issue-details/issue-details';

/**
 * Generated class for the IssueListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-issue-list',
  templateUrl: 'issue-list.html',
})
export class IssueListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IssueListPage');
  }

  goToDetails() {
    this.navCtrl.push(IssueDetailsPage, {
      foo: 'bar'
    });
  }

}
