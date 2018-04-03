import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { NgForm } from '@angular/forms';

import { config } from '../../app/config';
import { QimgImage } from '../../models/qimg-image';
import { AuthProvider } from '../../providers/auth/auth';
import { PictureProvider } from '../../providers/picture/picture';
import { Issue } from '../../models/issue';
import { IssuesProvider } from '../../providers/issues/issues';

/**
 * Generated class for the CreateIssuePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-create-issue',
  templateUrl: 'create-issue.html',
})
export class CreateIssuePage {
  picture: QimgImage;
  issue : Issue ;
  constructor(
    private auth: AuthProvider,
    private geolocation: Geolocation,
    private httpClient: HttpClient,
    private navCtrl: NavController,
    private navParams: NavParams,
    private pictureService: PictureProvider,
    private platform: Platform,
    private issuesProvider : IssuesProvider
  ) {
    this.issue = new Issue();
    console.log(this.issue);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateIssuePage');
    const url = `${config.apiUrl}/issueTypes`;
    this.httpClient.get(url).subscribe(issueTypes => {
      console.log('Issue types loaded', issueTypes);
    });

    this.platform.ready().then(() => {
      const geolocationPromise = this.geolocation.getCurrentPosition();
      geolocationPromise.then(position => {
        console.log(`User is at ${position.coords.longitude}, ${position.coords.latitude}`);
      }, err => {
        console.warn(`Could not retrieve user position because: ${err.message}`);
      });
    });

  }

  logOut() {
    this.auth.logOut();
  }

  takePicture() {
    this.pictureService.takeAndUploadPicture().subscribe(picture => {
      this.picture = picture;
    }, err => {
      console.warn('Could not take picture', err);
    });
  }

  onSubmit($event) {
    console.log(this.issue);
    console.log('c est passé dans submit');
    // Prevent default HTML form behavior.
    $event.preventDefault();
    // Do not do anything if the form is invalid.
    //if (this.form.invalid) {
    //  return;
    //}
    // Hide any previous login error.
    //this.loginError = false;
    // Insertion of the issue into the API .
    this.issuesProvider.insertData(this.issue).subscribe(issue=>{
      console.log(issue);
    }, err => {
      //this.formIssueError = true;
      console.warn(`Authentication failed: ${err.message}`);
    });
  }


}
