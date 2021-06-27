import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsComponent } from './forms/forms.component';
import { LoginComponent } from './login/login.component';

import { ComponentsModule } from '../components/components.module';

// import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FormsComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
    // ReactiveFormsModule
  ],
  // exports: [
  //   FormsComponent,
  //   LoginComponent
  // ]
})
export class PagesModule { }
