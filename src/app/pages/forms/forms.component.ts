import { Component } from '@angular/core';
import { QuestionsService } from '../../form-services/questions.service';
import { QuestionBase } from '../../entities/question-base';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {

  questions: QuestionBase[] = [];

  constructor(private questionsServices: QuestionsService) {
    this.questionsServices.getQuestions().subscribe((questions: QuestionBase[]) => {
      this.questions = questions;
    });
  }
}
