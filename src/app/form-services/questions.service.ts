import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { QuestionBase } from '../entities/question-base';
import { DropdownQuestion } from '../entities/question-dropdown';
import { TextboxQuestion } from '../entities/question-textbox';
import { TextareaQuestion } from '../entities/question-textarea';

@Injectable()
export class QuestionsService {

  // here is a simulation to a api get data
  getQuestions(): Observable<QuestionBase[]> {
    const questions: QuestionBase[] = [
      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          { key: 'solid', value: 'Solid' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'unproven', value: 'Unproven' }
        ],
        order: 3
      }),
      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        required: true,
        order: 2
      }),
      new TextboxQuestion({
        key: 'name',
        label: 'Name',
        type: 'text',
        required: true,
        order: 1
      }),
      new TextareaQuestion({
        key: 'description',
        label: 'Description',
        order: 4
      })
    ];
    return of(questions.sort((a, b) => a.order - b.order));
  }
}
