import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../service/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private login: LoginService, private router: Router){}

  canActivate() {
    if (this.login.isLoggedIn()) {
      this.router.navigate(['/home']);
    }
    return !this.login.isLoggedIn();
  }
  
}
