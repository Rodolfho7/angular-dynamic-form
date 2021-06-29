import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent implements OnChanges {

  @Input() form!: FormGroup;
  @Input() nome!: string;
  @Input() label!: string;

  @Input() itens: any[] = [];

  marcados: any[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.itens) {
      this.populateValues();
    }
  }

  populateValues(): void {
    this.marcados = this.itens.filter((v) => v.checked === true).map((v) => v.valor);
    this.populateFormField();
  }

  selected(event: any): void {
    let value: string = event.target.value;
    if (event.target.checked) {
      this.marcados.push(value);
    } else {
      this.marcados = this.marcados.filter(v => v !== value);
    }
    this.populateFormField();
  }

  populateFormField(): void {
    this.form.controls[this.nome].setValue(this.marcados.join(','));
  }

  get isInvalid(): boolean {
    return !this.form?.controls[this.nome].valid && this.form?.controls[this.nome].touched;
  }
}
