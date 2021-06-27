import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsComponent } from './forms/forms.component';
import { LoginComponent } from './login/login.component';

import { ComponentsModule } from '../components/components.module';

import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponentsFormComponent } from './login-components-form/login-components-form.component';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [
    FormsComponent,
    LoginComponent,
    LoginComponentsFormComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    LayoutModule,
    ReactiveFormsModule
  ],
  // exports: [
  //   FormsComponent,
  //   LoginComponent
  // ]
})
export class PagesModule { }
