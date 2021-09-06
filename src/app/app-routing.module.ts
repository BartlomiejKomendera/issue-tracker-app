import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guard/auth.guard';
import { HomeGuard } from './guard/home.guard';

const routes: Routes = [
  {path: "login", component: LoginComponent, canActivate: [AuthGuard]},
  {path: "home", component: HomeComponent, canActivate: [HomeGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
