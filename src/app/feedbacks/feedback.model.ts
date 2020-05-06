export class Feedback {

    // if type === 'none' then feedback hadn't been categorized yet
    // if it's and issue so issueType must have a not-none value but if type is not issue so issueType value is none
    public feedbackID: number;
    public type: 'not categorized' | 'issue' | 'normal feedback';
    public issueType: 'appIssue' | 'serviceIssue' | 'carIssue' | 'none';
    public issueSolved: boolean;
    public content: string;
    public customerID: number;
    public submissionDate: { year: number, month: number, day: number };

    // tslint:disable-next-line: max-line-length
    constructor(feedbackID: number, type: 'not categorized' | 'issue' | 'normal feedback', issueType: 'appIssue' | 'serviceIssue' | 'carIssue' | 'none', issueSolved: boolean, content: string, customerID: number, submissionDate: { year: number, month: number, day: number }) {
        this.feedbackID = feedbackID;
        this.type = type;
        this.issueType = issueType;
        this.issueSolved = issueSolved;
        this.customerID = customerID;
        this.content = content;
        this.submissionDate = submissionDate;
    }


}
