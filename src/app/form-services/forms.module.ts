import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionControlService } from './question-control.service';
import { QuestionsService } from './questions.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    QuestionControlService,
    QuestionsService
  ]
})
export class FormsModule { }
