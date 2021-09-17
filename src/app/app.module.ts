import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IssuesComponent } from './home/issues/issues.component';
import { IssueComponent } from './home/issue/issue.component';
import { AuthInterceptorService } from './service/auth-interceptor.service';
import { TaskbarComponent } from './home/navbar/navbar.component';
import { OpenedIssueComponent } from './home/opened-issue/opened-issue.component';
import { EditIssueComponent } from './home/edit-issue/edit-issue.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    IssuesComponent,
    IssueComponent,
    TaskbarComponent,
    OpenedIssueComponent,
    EditIssueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
