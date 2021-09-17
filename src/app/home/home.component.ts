import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private login: LoginService) { }

  private token = this.login.getJwtToken();

  private tokenExpired(token: string) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
    console.log("tokenExpired fucntion");
    console.log("expiry:" + expiry);
    console.log("cur timestamp:" + (Math.floor((new Date).getTime() / 1000)));
  }

  ngOnInit(): void {
    if (this.token!=null) {
      if (this.tokenExpired(this.token)) {
        localStorage.clear();
        location.reload();
      }
    }
  }

}
