import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IssueService } from 'src/app/service/issue.service';
import { Issue, IssueJson } from '../issue/Issue';

@Component({
  selector: 'app-new-issue',
  templateUrl: './new-issue.component.html',
  styleUrls: ['./new-issue.component.css']
})
export class NewIssueComponent implements OnInit {

  userData: any = {};

  constructor(private issueService: IssueService) { }

  ngOnInit(): void {
  }

  back() {
    location.assign("http://localhost:4200/home");
  }

  submit(data: NgForm) {
    this.userData = data;
    
    const new_issue: IssueJson = {title: this.userData.title,description: this.userData.description, department: this.userData.department,
      status: this.userData.status, severity: this.userData.severity, createdBy: localStorage.getItem("user")!};

    this.issueService.saveIssue(new_issue);
    location.reload();
  }
}
