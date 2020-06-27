import { Injectable } from '@angular/core';
import { Issue } from './issue.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  constructor(private http: HttpClient) { }

  postNewIssue(issue: Issue) {
    return this.http.post('https://barq-api.azurewebsites.net/api/issues', issue);
  }

  getAllIssues() {

    return this.http.get('https://barq-api.azurewebsites.net/api/issues').pipe(
      map((issuesStream: Issue[]) => {
        const issuesArray = [];
        // tslint:disable-next-line: forin
        for (const id in issuesStream) {
          issuesArray.push({ ...issuesStream[id] });
        }
        return issuesArray;
      }));
  }

  getIssueByID(issueID: string) {
    const issueAPI = 'https://barq-api.azurewebsites.net/api/issues/' + issueID;
    return this.http.get<Issue>(issueAPI);
  }

  updateIssueByID(issueID: string, issue: Issue) {
    const issueAPI = 'https://barq-api.azurewebsites.net/api/issues/' + issueID;
    return this.http.put(issueAPI, issue);
  }

  deleteIssueByID(issueID: string) {
    const issueAPI = 'https://barq-api.azurewebsites.net/api/issues/' + issueID;
    return this.http.delete(issueAPI);
  }


}
