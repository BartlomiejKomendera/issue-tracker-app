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

  constructor(private issueService: IssueService) { }

  ngOnInit(): void {
    this.issueService.getIssues().subscribe(
      res => {this.issues = res}
    )
  }

}
