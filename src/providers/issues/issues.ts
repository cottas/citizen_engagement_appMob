import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Issue} from '../../models/issue';
import {Observable} from 'rxjs/Observable';
import { config } from '../../app/config';


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

  insertData(issue: Issue): Observable<Issue> {
    console.log("C'est passé dans le provider");
    const issueUrl = `${config.apiUrl}/issues`;
    return this.http.post<Issue>(issueUrl, issue);
  }

}
