import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

import { config } from '../../app/config';
import { QimgImage } from '../../models/qimg-image';
import { AuthProvider } from '../../providers/auth/auth';
import { PictureProvider } from '../../providers/picture/picture';

import { Issue } from '../../models/issue';
import { IssuesProvider } from '../../providers/issues/issues';
import { IssueRequest } from '../../models/issue-request';
import { IssueType } from "../../models/issue-type";


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
  formIssueError: boolean;
  issueRequest: IssueRequest;
  issueTypes: IssueType[];

  constructor(
    private auth: AuthProvider,
    private geolocation: Geolocation,
    private httpClient: HttpClient,
    private pictureService: PictureProvider,
    private platform: Platform,
    private issuesProvider : IssuesProvider,
  ) {
    this.issue = new Issue();
    this.issueRequest = {
                  location: {
                    coordinates: [0, 0],
                    type: "Point"
                  },
                  description: '',
                  tags: '',
                  imageUrl: '',
                  issueTypeHref: ''
                };
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateIssuePage');
    const url = `${config.apiUrl}/issueTypes`;
    this.httpClient.get(url).subscribe(issueTypes => {
      console.log('Issue types loaded', issueTypes);
      this.getIssueTypes();
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

  getIssueTypes(){
    this.issuesProvider.getIssueTypes().subscribe(issueTypes => {
      console.log(issueTypes);
      this.issueTypes = issueTypes;
    });
  }

  onSubmit($event) {
    console.log('c est passé dans submit');
    $event.preventDefault();
    this.platform.ready().then(() => {
      const geolocationPromise = this.geolocation.getCurrentPosition();
      geolocationPromise.then(position => {
        console.log(`User is at ${position.coords.longitude}, ${position.coords.latitude}`);
        this.issueRequest.location = {
          "type": "Point",
          "coordinates": [
            position.coords.longitude,
            position.coords.latitude
          ]
        };
      }, err => {
        console.warn(`Could not retrieve user position because: ${err.message}`);
      });
    });

    // Insertion of the issue into the API .
    console.log(this.issueRequest);
    this.issuesProvider.insertData(this.issueRequest).subscribe(issue=>{
    }, err => {
      //this.formIssueError = true;
      console.warn(`Authentication failed: ${err.message}`);
    });

  }


}
