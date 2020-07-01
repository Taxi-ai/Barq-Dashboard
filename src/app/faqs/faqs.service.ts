import { Injectable } from '@angular/core';
import { Question } from './question.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FaqsService {

  constructor(private http: HttpClient) { }

  postNewQuestion(question: Question) {
    return this.http.post('https://barq-api.azurewebsites.net/api/faqs', question);
  }

  getAllQuestions() {

    return this.http.get('https://barq-api.azurewebsites.net/api/faqs').pipe(
      map((questionsStream: Question[]) => {
        const questionsArray = [];
        // tslint:disable-next-line: forin
        for (const id in questionsStream) {
          questionsArray.push({ ...questionsStream[id] });
        }
        return questionsArray;
      }));
  }

  getQuestionByID(questionID: string) {
    const questionAPI = 'https://barq-api.azurewebsites.net/api/faqs/' + questionID;
    return this.http.get<Question>(questionAPI);
  }


  updateQuestionByID(questionID: string, question: Question) {
    const questionAPI = 'https://barq-api.azurewebsites.net/api/faqs/' + questionID;
    return this.http.put(questionAPI, question);
  }

  deleteQuestionByID(questionID: string) {
    const questionAPI = 'https://barq-api.azurewebsites.net/api/faqs/' + questionID;
    return this.http.delete(questionAPI);
  }
}
