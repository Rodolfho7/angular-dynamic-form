import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {

  @Input() form!: FormGroup;
  @Input() nome!: string;
  @Input() label!: string;
  @Input() itens: any[] = [];

  get isInvalid(): boolean {
    return !this.form?.controls[this.nome].valid && this.form?.controls[this.nome].touched;
  }

  onChange(event: any): void {
    this.populateFormField(event.target.value);
  }

  populateFormField(valor: string): void {
    this.form.controls[this.nome].setValue(valor);
  }
}
