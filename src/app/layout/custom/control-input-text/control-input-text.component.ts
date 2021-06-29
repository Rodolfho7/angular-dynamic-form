import { Component } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'control-input-text',
  templateUrl: './control-input-text.component.html',
  styleUrls: ['./control-input-text.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: ControlInputTextComponent
    }
  ]
})
export class ControlInputTextComponent implements ControlValueAccessor {

  
  internalInputValue: string = '';
  disabled: boolean = false;

  get inputValue() {
    return this.internalInputValue;
  }

  set inputValue(value: any) {
    this.internalInputValue = value;
    this.onChange(value);
  }

  onChange = (value: any) => {};
  onTouched = () => {};

  writeValue(value: string): void {
    this.internalInputValue = value;
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
