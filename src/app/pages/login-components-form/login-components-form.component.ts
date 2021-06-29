import { Component } from '@angular/core';
import { QuestionBase } from '../../entities/question-base';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-components-form',
  templateUrl: './login-components-form.component.html',
  styleUrls: ['./login-components-form.component.scss']
})
export class LoginComponentsFormComponent {

  questions: QuestionBase[] = [];
  form!: FormGroup;
  payload!: string;

  opcoes = [
    {
      valor: '1',
      checked: false
    },
    {
      valor: '2',
      checked: true
    },
    {
      valor: '3',
      checked: false
    },
    {
      valor: '4',
      checked: true
    },
  ];

  itens = "1 ano,2,3,4,5";

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({
      nome: 'ro',
      tipo: '',
      secoes: this.fb.array([this.novaSecao()])
    });
  }

  get secoes() {
    return this.form.get('secoes') as FormArray;
  }

  getQuestions(secao: AbstractControl): FormArray {
    return (secao as FormGroup).get('questoes') as FormArray;
  }

  novaSecao(): FormGroup {
    return this.fb.group({
      textoInicial: '',
      titulo: '',
      descricao: '',
      questoes: this.fb.array([this.novaQuestao()])
    })
  }

  novaQuestao(): FormGroup {
    return this.fb.group({
      texto: '',
      nome: '',
      opcoes: '',
      marcar: ''
    });
  }

  adicionarSecao(): void {
    this.secoes.push(this.novaSecao());
  }

  adicionarQuestao(secao: AbstractControl): void {
    (secao.get('questoes') as FormArray).push(this.novaQuestao());
  }

  onSubmit(): void {
    this.payload = this.form.getRawValue();
  }

  castToFormGroup = (field: AbstractControl): FormGroup => field as FormGroup;
}
