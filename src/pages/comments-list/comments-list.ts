import {IssuesProvider} from "../../providers/issues/issues";
import {OnInit, Component, Input} from "@angular/core";
import {NavController, NavParams} from 'ionic-angular';
import {Comment} from "../../models/comment";
import {CommentsProvider} from "../../providers/comments/comments";
import {ChangeDetectorRef} from "@angular/core";
import {NgForm} from "@angular/forms";

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
  newcomment: Comment;

  constructor(public navCtrl: NavController, public navParams: NavParams, public commentsProvider: CommentsProvider, public changeDetector: ChangeDetectorRef) {
    this.comments = [];
    this.newcomment = new Comment();
    this.newcomment.text = "";
  }

  ngOnInit() {
    this.commentsProvider.getCommentsFromIssue(this.issue_id).subscribe(data => {
      this.comments = data;
    });
  }

  onSubmit(form: NgForm) {

    // in case the form is not valid
    if (form.invalid) {
      return;
    }

    this.commentsProvider.postCommentOnIssue(this.issue_id, this.newcomment.text).subscribe(data => {
      console.log("Comment created:" + data);
    });


  }

  onChange(event) {
    // angular does not detect changes automatically in Modals, so we have to do it ourselves. 
    this.changeDetector.detectChanges();
  }

}
