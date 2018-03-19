import { IssuesProvider } from "../../providers/issues/issues";
import { OnInit, Component, Input } from "@angular/core";
import { NavController, NavParams } from 'ionic-angular';
import { Comment } from "../../models/comment";

/**
 * Generated class for the CommentsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-comments-list',
  templateUrl: 'comments-list.html',
})
export class CommentsListPage implements OnInit {
  
  @Input() issue_id: string;
  comments: Comment[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public issues: IssuesProvider) {
    this.comments = [];
  }
  
  ngOnInit() {
    this.issues.getCommentsFromIssue(this.issue_id).subscribe(data => {
        this.comments = data;
    });
  }

}
