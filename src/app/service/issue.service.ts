import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Issue } from '../home/issue/Issue';
import { LoginService } from './login.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  constructor(private http: HttpClient, private login: LoginService) { }

  getIssues(): Observable<Issue[]>{

    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });

    return this.http.get<Issue[]>("http://localhost:8080/all", {headers: headers});
  }

}
