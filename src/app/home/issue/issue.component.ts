import { Component, Input, OnInit } from '@angular/core';
import { IssueService } from 'src/app/service/issue.service';
import { Issue } from '../issue/Issue';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {
  @Input()
  issue!: Issue;
  changeStyle:boolean = false;
  severityColor:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
