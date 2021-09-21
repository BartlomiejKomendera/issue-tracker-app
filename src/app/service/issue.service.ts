import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Issue, IssueJson } from '../home/issue/Issue';
import { LoginService } from './login.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  constructor(private http: HttpClient, private login: LoginService) { }

  private headers = new HttpHeaders({
    "Content-Type": "application/json"
  });

  getIssues(): Observable<Issue[]>{
    console.log("IssueService - getIssues");
    return this.http.get<Issue[]>("http://localhost:8080/all", {headers: this.headers});
  }

  saveIssue(issue: IssueJson){
    console.log("IssueService - saveIssue");
    this.http.post<Issue>("http://localhost:8080/new", issue, {headers: this.headers}).subscribe(
      res => {console.log(res)},
      err => {console.log(err)}
    );
  }

  updateIssue(issue: Issue){
    console.log("IssueService - updateIssue");
    this.http.put<Issue>("http://localhost:8080/edit", issue, {headers: this.headers}).subscribe(
      res => {console.log(res)},
      err => {console.log(err)}
    );
  }

  deleteIssue(id: number){
    console.log("IssueService - deleteIssue");
    this.http.delete("http://localhost:8080/delete?id=" + id.toString(), {headers: this.headers}).subscribe(
      res => {console.log(res)},
      err => {console.log(err)}
    );
  }

}
