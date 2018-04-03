import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Issue} from '../../models/issue';
import {IssueType} from '../../models/issue-type';
import {IssueRequest} from '../../models/issue-request';
import {Comment} from '../../models/comment';
import {Observable} from 'rxjs/Observable';
import {config} from '../../app/config';

const URL_API = config.apiUrl;

@Injectable()
export class IssuesProvider {

  constructor(public http: HttpClient) {

  }

  getIssues(page: number, pageSize: number) : Promise<Issue[]> {
    return this.http.get<Issue[]>(URL_API + '/issues?page=' + page + '&pageSize=' + pageSize).toPromise();
  }

  getIssue(id: string): Observable<Issue> {
    console.log(id);
    return this.http.get<Issue>(URL_API + '/issues/' + id);
  }

  insertData(issue: Issue): Observable<Issue> {
    console.log("C'est passé dans insert data");
    const issueUrl = `${config.apiUrl}/issues`;
    return this.http.post<Issue>(issueUrl, issue);
  }

  getCommentsFromIssue(issue_id: string): Observable<Comment[]> {
    return this.http.get<Comment[]>(URL_API + '/issues/' + issue_id + "/comments");
  }

  getIssueTypes(): Observable<IssueType[]> {
    console.log("C'est passé dans getIssueTypes");
    return this.http.get<IssueType[]>(config.apiUrl + '/issueTypes');
  }
}
