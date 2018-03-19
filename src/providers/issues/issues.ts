import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Issue } from '../../models/issue';
import { Observable } from 'rxjs/Observable';

const URL_API = 'https://comem-citizen-engagement.herokuapp.com/api';

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
    console.log("C'est passé dans le provider");
    const issueUrl = `${config.apiUrl}/issues`;
    return this.http.post<Issue>(issueUrl, issue);
  }

}
