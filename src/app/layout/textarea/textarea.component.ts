import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../../entities/question-base';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent {

  @Input() question!: QuestionBase;
  @Input() form!: FormGroup;

  get isInvalid(): boolean {
    return !this.form?.controls[this.question.key].valid && this.form?.controls[this.question.key].touched;
  }
}
