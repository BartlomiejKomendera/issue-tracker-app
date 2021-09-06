import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {

  constructor(private login: LoginService, private router: Router){}

  canActivate() {
    console.log('homeGuard working')
    if (!this.login.isLoggedIn()) {
      this.router.navigate(['/login'])
    }
    return !this.login.isLoggedIn();
  }
  
}
