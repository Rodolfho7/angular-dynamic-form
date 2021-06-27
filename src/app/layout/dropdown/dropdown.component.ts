import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../../entities/question-base';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {

  @Input() question!: QuestionBase;
  @Input() form!: FormGroup;

  get isInvalid(): boolean {
    return !this.form?.controls[this.question.key].valid && this.form?.controls[this.question.key].touched;
  }
}
