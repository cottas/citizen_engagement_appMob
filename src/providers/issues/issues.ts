import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Issue} from '../../models/issue';
import {Observable} from 'rxjs/Observable';
import {config} from '../../app/config';


@Injectable()
export class IssuesProvider {

  constructor(public http: HttpClient) {

  }

  getIssues(page: number, pageSize: number) : Promise<Issue[]> {
    return this.http.get<Issue[]>(config.apiUrl + '/issues?page=' + page + '&pageSize=' + pageSize + '&include=creator&include=issueType').toPromise();
  }

  getIssue(id: string): Observable<Issue> {
    return this.http.get<Issue>(config.apiUrl + '/issues/' + id + "?include=issueType&include=creator");
  }
    
  getIssuesFilteredByStatus(page: number, pageSize: number, status: string): Promise<Issue[]> {
    return this.http.get<Issue[]>(config.apiUrl + '/issues?page=' + page + '&pageSize=' + pageSize + '&state=' + status + '&include=creator&include=issueType').toPromise();
  }

  insertData(issue: Issue): Observable<Issue> {
    console.log("C'est passé dans le provider");
    const issueUrl = `${config.apiUrl}/issues`;
    return this.http.post<Issue>(issueUrl, issue);
  }
}
