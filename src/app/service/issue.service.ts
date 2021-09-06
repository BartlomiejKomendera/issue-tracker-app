import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Issue } from '../home/issue/Issue';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  constructor(private http: HttpClient, private login: LoginService) { }

  getIssues(){

    const token = this.login.getJwtToken();

    const headers = new HttpHeaders({
      "Content-Type": "application/json"/*,
      "Authorization": */
    });

    return this.http.get<Issue[]>("http://localhost:8080/authenticate", {headers: headers});
  }

}
