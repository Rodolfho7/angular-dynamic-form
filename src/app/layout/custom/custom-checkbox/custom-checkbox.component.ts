import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-checkbox',
  templateUrl: './custom-checkbox.component.html',
  styleUrls: ['./custom-checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: CustomCheckboxComponent
    }
  ]
})
export class CustomCheckboxComponent implements ControlValueAccessor {

  inputValue: string = '';
  disabled: boolean = false;

  @Input() set itens(value: string) {
    this.options = [];
    value.split(',').forEach((v) => {
      this.options.push({
        value: v,
        checked: false
      });
    });
  }

  options: {value: string, checked: boolean}[] = [];

  onChange = (value: any) => {};
  onTouched = () => {};

  selected(event: any, index: number): void {
    this.options[index].checked = event.target.checked ? true : false;
    const response = this.options.filter((v) => v.checked).map((v) => v.value).join(',');
    this.onChange(response);
  }

  // recebe uma string de valores separados por virgula
  writeValue(value: string): void {
    this.inputValue = value;
    const optionsForms = value.split(',').map((v) => v.trim());
    this.options = this.options.map((item) => {
      optionsForms.indexOf(item.value) >= 0 ? item.checked = true : item.checked = false;
      return item;
    });
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }
}
