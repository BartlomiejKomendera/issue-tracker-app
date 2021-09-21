import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Issue } from '../issue/Issue';
import { IssueService } from '../../service/issue.service';

@Component({
  selector: 'app-edit-issue',
  templateUrl: './edit-issue.component.html',
  styleUrls: ['./edit-issue.component.css']
})
export class EditIssueComponent implements OnInit {

  @Input()
  currentIssue!: Issue;
  userData: any = {};
  confirmationModal: boolean = false;

  constructor(private issueService: IssueService) { }

  ngOnInit(){
    
  }

  submit(data: NgForm) {
    this.userData = data;

    const updatedIssue: Issue = {
      id: this.currentIssue.id, title: this.userData.title,
      description: this.userData.description, department: this.userData.department,
      status: this.userData.status, severity: this.userData.severity, createdBy: this.userData.createdBy,
      creationDate: this.userData.creationDate
    };

    this.issueService.updateIssue(updatedIssue);
    location.assign("http://localhost:4200/home");
  }

  deleteIssue(id: number) {
    this.issueService.deleteIssue(id);
    //location.assign("http://localhost:4200/home");
  }

}
