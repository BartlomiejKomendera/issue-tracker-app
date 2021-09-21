import { LoginComponent } from "src/app/login/login.component";

export interface Issue {
    id: number;
    title: string;
    description: string;
    department: string;
    status: string;
    severity: string;
    createdBy: string;
    creationDate: string;
}

export interface IssueJson {
    title: string;
    description: string;
    department: string;
    status: string;
    severity: string;
    createdBy: string;
}