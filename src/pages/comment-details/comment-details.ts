import { NavController, NavParams } from 'ionic-angular';
import { Component, Input } from "@angular/core";
import { Comment } from "../../models/comment";

/**
 * Generated class for the CommentDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-comment-details',
  templateUrl: 'comment-details.html',
})
export class CommentDetailsPage {
  
  @Input() comment: Comment;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentDetailsPage');
  }

}
