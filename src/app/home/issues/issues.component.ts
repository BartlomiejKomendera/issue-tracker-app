import { Component, OnInit } from '@angular/core';
import { IssueService } from 'src/app/service/issue.service';
import { Issue } from '../issue/Issue';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {
  issues: Issue[] = [];
  openIssue: boolean = false;
  newIssue: boolean = false;
  currentIssue!: Issue;

  constructor(private issueService: IssueService) { }

  ngOnInit(): void {
    this.issueService.getIssues().subscribe(
      res => {this.issues = res}
    )
  }

  changeOpenIssueFlag(issue: Issue){
    this.currentIssue = issue;
    this.openIssue = true;

    console.log('issue id: ' + this.currentIssue.id)
  }

  changeNewIssueFlag(){
    this.newIssue = true;
  }

}
