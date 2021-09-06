import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue/Issue';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {
  issues: Issue[] = [{title: 'Example issue'}];

  constructor() { }

  ngOnInit(): void {
  }

}
