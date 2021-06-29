import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextComponent } from './input-text/input-text.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TextareaComponent } from './textarea/textarea.component';
import { ButtonSubmitComponent } from './button-submit/button-submit.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { ControlInputTextComponent } from './custom/control-input-text/control-input-text.component';
import { CustomCheckboxComponent } from './custom/custom-checkbox/custom-checkbox.component';

@NgModule({
  declarations: [
    InputTextComponent,
    DropdownComponent,
    TextareaComponent,
    ButtonSubmitComponent,
    MultiSelectComponent,
    ControlInputTextComponent,
    CustomCheckboxComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    InputTextComponent,
    DropdownComponent,
    TextareaComponent,
    ButtonSubmitComponent,
    MultiSelectComponent,
    ControlInputTextComponent,
    CustomCheckboxComponent
  ]
})
export class LayoutModule { }
