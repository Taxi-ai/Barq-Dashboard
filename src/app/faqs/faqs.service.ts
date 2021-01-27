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
    return this.http.post('https://taxi-graduation-project.firebaseio.com/faqs.json', question);
  }

  getAllQuestions() {

    return this.http.get('https://taxi-graduation-project.firebaseio.com/faqs.json').pipe(
      map((questionsStream: Question[]) => {
        const questionsArray = [];
        // tslint:disable-next-line: forin
        for (const id in questionsStream) {
          questionsArray.push({ id, ...questionsStream[id] });
        }
        return questionsArray;
      }));
  }

  getQuestionByID(questionID: string) {
    const questionAPI = 'https://taxi-graduation-project.firebaseio.com/faqs/' + questionID + '.json';
    return this.http.get<Question>(questionAPI);
  }


  updateQuestionByID(questionID: string, question: Question) {
    const questionAPI = 'https://taxi-graduation-project.firebaseio.com/faqs/' + questionID + '.json';
    return this.http.put(questionAPI, question);
  }

  deleteQuestionByID(questionID: string) {
    const questionAPI = 'https://taxi-graduation-project.firebaseio.com/faqs/' + questionID + '.json';
    return this.http.delete(questionAPI);
  }
}
