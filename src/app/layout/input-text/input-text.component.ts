import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent {

  @Input() form!: FormGroup;
  @Input() nome!: string;
  @Input() label!: string;

  get isInvalid(): boolean {
    return !this.form?.controls[this.nome].valid && this.form?.controls[this.nome].touched;
  }
}
