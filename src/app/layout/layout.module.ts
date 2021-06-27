import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './input-text/input-text.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TextareaComponent } from './textarea/textarea.component';
import { ButtonSubmitComponent } from './button-submit/button-submit.component';


@NgModule({
  declarations: [
    InputTextComponent,
    DropdownComponent,
    TextareaComponent,
    ButtonSubmitComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    InputTextComponent,
    DropdownComponent,
    TextareaComponent,
    ButtonSubmitComponent
  ]
})
export class LayoutModule { }
