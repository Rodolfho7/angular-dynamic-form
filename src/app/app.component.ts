import { Component } from '@angular/core';
import { QuestionBase } from './entities/question-base';
import { QuestionsService } from './form-services/questions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  questions: QuestionBase[] = [];

  constructor(private questionsServices: QuestionsService) {
    this.questionsServices.getQuestions().subscribe((questions: QuestionBase[]) => {
      this.questions = questions;
    });
  }
}
