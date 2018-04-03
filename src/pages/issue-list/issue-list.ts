import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { IssueDetailsPage } from '../issue-details/issue-details';

import { IssuesProvider } from "../../providers/issues/issues";

import { Issue } from "../../models/issue";

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
    
  issuesList: Issue[];
  status = "all";

  constructor(public navCtrl: NavController, public navParams: NavParams, public issuesProvider: IssuesProvider, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.getAllIssues();
    console.log('ionViewDidLoad IssueListPage');
  }
    
  async getAllIssues() {
    var resBody = true;
    var page = 1;
    this.issuesList = [];
    while (resBody) {
        const data = await this.issuesProvider.getIssues(page, 50);
        console.log(data);
        console.log(data.length);
        data.forEach(issue => {
            this.issuesList.push(issue);
        });
        if (data.length < 50) {
            resBody = false;
        } else {
            page++;
        }
    }
  }
    
  async getAllIssuesFilteredByStatus(status) {
    var resBody = true;
    var page = 1;
    this.issuesList = [];
    while (resBody) {
        const data = await this.issuesProvider.getIssuesFilteredByStatus(page, 50, status);
        console.log(data);
        console.log(data.length);
        data.forEach(issue => {
            this.issuesList.push(issue);
        });
        if (data.length < 50) {
            resBody = false;
        } else {
            page++;
        }
    }
  }
    
  segmentChanged(status) {
    console.log("Filter type: " + status);
    if(status === "all") {
      this.getAllIssues();
    }
    else {
      this.getAllIssuesFilteredByStatus(status);
    }
  }

  goToDetails(issue: Issue) {
    let profileModal = this.modalCtrl.create(IssueDetailsPage, {selected_issue:issue});
    profileModal.present();
  }

}
