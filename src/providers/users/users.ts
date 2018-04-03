import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Issue} from '../../models/issue';
import {Comment} from '../../models/comment';
import {Observable} from 'rxjs/Observable';

import { User } from "../../models/user";
import { UserRequest } from "../../models/user-request";

import {config} from '../../app/config';

/*
  Generated class for the ProvidersUsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsersProvider {

  constructor(public http: HttpClient) {
    
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(config.apiUrl + "/users");
  }

  getUser(id : string): Observable<User> {
    return this.http.get<User>(config.apiUrl + "/users/" + id);
  }

  postUser(userRequest: UserRequest): Observable<User> {
    return this.http.post<User>(config.apiUrl + "/users", userRequest).pipe();
  }
    
}
