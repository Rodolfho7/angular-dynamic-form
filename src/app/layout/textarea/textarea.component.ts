import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../../entities/question-base';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent {

  @Input() nome!: string;
  @Input() label!: string;
  @Input() form!: FormGroup;

  get isInvalid(): boolean {
    return !this.form?.controls[this.nome].valid && this.form?.controls[this.nome].touched;
  }
}
