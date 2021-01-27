import { Injectable } from '@angular/core';
import { Issue } from './issue.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UsersService } from '../users/users.service';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  constructor(private usersService: UsersService, private http: HttpClient) { }

  postNewIssue(issue: Issue) {
    return this.http.post('https://taxi-graduation-project.firebaseio.com/issues.json', issue);
  }

  getAllIssues() {

    return this.http.get('https://taxi-graduation-project.firebaseio.com/issues.json').pipe(
      map((issuesStream: Issue[]) => {
        const issuesArray = [];
        // tslint:disable-next-line: forin
        for (const id in issuesStream) {
          issuesArray.push({ id, ...issuesStream[id] });
        }
        return issuesArray;
      }));
  }

  getIssueByID(issueID: string) {
    const issueAPI = 'https://taxi-graduation-project.firebaseio.com/issues/' + issueID + '.json';
    return this.http.get<Issue>(issueAPI);
  }

  getIssueOwner(ownerID: string) {
    return this.usersService.getUserByID(ownerID);
  }

  updateIssueByID(issueID: string, issue: Issue) {
    const issueAPI = 'https://taxi-graduation-project.firebaseio.com/issues/' + issueID + '.json';
    return this.http.put(issueAPI, issue);
  }

  deleteIssueByID(issueID: string) {
    const issueAPI = 'https://taxi-graduation-project.firebaseio.com/issues/' + issueID + '.json';
    return this.http.delete(issueAPI);
  }


}
