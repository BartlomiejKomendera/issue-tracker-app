import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userData: any={};
  
  constructor(private login: LoginService, private router: Router) { }

  ngOnInit(): void { }

  submit(data: NgForm){
    this.userData = data;
    this.login.authenticate(this.userData.username, this.userData.password)
    .subscribe(data => {
      localStorage.setItem("token", data.jwt)
      this.router.navigate(['/home'])
      console.log(data)
    });
  }
}
