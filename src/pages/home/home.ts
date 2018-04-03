import { AuthProvider } from "../../providers/auth/auth";
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CreateIssuePage } from '../create-issue/create-issue';
import { IssueMapPage } from '../issue-map/issue-map';
import { IssueListPage } from '../issue-list/issue-list';

export interface HomePageTab {
  title: string;
  icon: string;
  component: Function;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  createIssuePage = CreateIssuePage;
  tabs: HomePageTab[];

  constructor(
    public navCtrl: NavController,
    private auth: AuthProvider
) {
    this.tabs = [
      { title: 'New Issue', icon: 'add', component: CreateIssuePage },
      { title: 'Issue Map', icon: 'map', component: IssueMapPage },
      { title: 'Issue List', icon: 'list', component: IssueListPage }
    ];
  }

  logOut() {
    this.auth.logOut();
  }
  goToPage() {
    this.navCtrl.push(CreateIssuePage);
  }
  filter() {
      this.navCtrl.push(IssueListPage);
  }
}
