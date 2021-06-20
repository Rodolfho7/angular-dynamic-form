import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../../entities/question-base';
import { QuestionControlService } from '../../form-services/question-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase[] = [];

  form!: FormGroup;
  payLoad = '';

  constructor(private questionControlService: QuestionControlService) { }

  ngOnInit(): void {
    this.form = this.questionControlService.toFormGroup(this.questions);
  }

  onSubmit(): void {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
