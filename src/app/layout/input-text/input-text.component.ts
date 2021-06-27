import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../../entities/question-base';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent {

  @Input() question!: QuestionBase;
  @Input() form!: FormGroup;

  get isInvalid(): boolean {
    return !this.form?.controls[this.question.key].valid && this.form?.controls[this.question.key].touched;
  }
}
