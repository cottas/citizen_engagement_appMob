import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Issue } from '../../models/issue';
//import { Observable } from 'rxjs/Observable';


const URL_API = 'https://comem-citizen-engagement.herokuapp.com/api';

/*
  Generated class for the ProvidersIssuesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class IssuesProvider {

  constructor(public http: HttpClient) {
    
  }
    
    getIssues(page: number, pageSize: number) : Promise<Issue[]> {
        return this.http.get<Issue[]>(URL_API + '/issues?page=' + page + '&pageSize=' + pageSize).toPromise();
    }

}
