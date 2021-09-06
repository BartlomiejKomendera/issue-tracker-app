import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

/*export interface Authentication {
  token: string;
}*/

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  authenticate(username: string, password: string){
    console.log("inside service");
    
    const user = {username, password};
    const body = JSON.stringify(user);
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    
    console.log("data: " + user.username + " | " + user.password);
    return this.http.post<any>("http://localhost:8080/authenticate", body, {headers: headers});
    
  }

  isLoggedIn(){
    return !!this.getJwtToken();
  }

  getJwtToken(){
    return localStorage.getItem('token');
  }

}