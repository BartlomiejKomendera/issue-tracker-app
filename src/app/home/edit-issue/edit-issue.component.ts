import { Component, Input, OnInit } from '@angular/core';
import { Issue } from '../issue/Issue';

@Component({
  selector: 'app-edit-issue',
  templateUrl: './edit-issue.component.html',
  styleUrls: ['./edit-issue.component.css']
})
export class EditIssueComponent implements OnInit {

  @Input()
  currentIssue!: Issue;

  constructor() { }

  ngOnInit(): void {

  }

}
