import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Issue} from '../../models/issue';
import {Comment} from '../../models/comment';
import {Observable} from 'rxjs/Observable';


const URL_API = 'https://comem-citizen-engagement.herokuapp.com/api';

@Injectable()
export class IssuesProvider {

  constructor(public http: HttpClient) {

  }

  getIssues(pageSize: number): Observable<Issue[]> {
    if (!pageSize) {
      return this.http.get<Issue[]>(URL_API + '/issues');
    } else {
      return this.http.get<Issue[]>(URL_API + '/issues?pageSize=' + pageSize);
    }
  }

  getIssue(id: string): Observable<Issue> {
    console.log(id);
    return this.http.get<Issue>(URL_API + '/issues/' + id);
  }

  getCommentsFromIssue(issue_id: string): Observable<Comment[]> {
    return this.http.get<Comment[]>(URL_API + '/issues/' + issue_id + "/comments");
  }

}
