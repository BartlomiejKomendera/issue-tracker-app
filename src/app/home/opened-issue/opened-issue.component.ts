import { Component, Input, OnInit } from '@angular/core';
import { Issue } from '../issue/Issue';

@Component({
  selector: 'app-opened-issue',
  templateUrl: './opened-issue.component.html',
  styleUrls: ['./opened-issue.component.css']
})
export class OpenedIssueComponent implements OnInit {
  @Input()
  currentIssue!: Issue;
  disabled = "disabled";
  edit: boolean = false;

  constructor() { }

  ngOnInit(): void {
    console.log('opened issue works: ' + this.currentIssue.title)
  }

  editIssue() {
    this.edit = true;
  }

}
