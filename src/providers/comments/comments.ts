import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Comment} from '../../models/Comment';
import {config} from '../../app/config';

/*
  Generated class for the CommentProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


@Injectable()
export class CommentsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CommentProvider Provider');
  }

  getCommentsFromIssue(issue_id: string): Observable<Comment[]> {
    return this.http.get<Comment[]>(config.apiUrl + '/issues/' + issue_id + "/comments?include=author");
  }

  postCommentOnIssue(issue_id: string, text: string): Observable<Comment> {
    return this.http.post<Comment>(config.apiUrl  + '/issues/' + issue_id + "/comments", {"text": text}).pipe();
  }
}


