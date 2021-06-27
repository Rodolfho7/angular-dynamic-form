import { Component } from '@angular/core';
import { QuestionsService } from '../../form-services/questions.service';
import { QuestionBase } from '../../entities/question-base';
import { QuestionControlService } from '../../form-services/question-control.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-components-form',
  templateUrl: './login-components-form.component.html',
  styleUrls: ['./login-components-form.component.scss']
})
export class LoginComponentsFormComponent {

  questions: QuestionBase[] = [];
  form!: FormGroup;
  payload!: string;

  constructor(private questionsServices: QuestionsService, private questionControlService: QuestionControlService) {
    this.questionsServices.getQuestions().subscribe((questions: QuestionBase[]) => {
      this.questions = questions;
      this.form = this.questionControlService.toFormGroup(this.questions);
    });
  }
  
  onSubmit(): void {
    this.payload = this.form.getRawValue();
    console.log(this.payload);
  }
}
