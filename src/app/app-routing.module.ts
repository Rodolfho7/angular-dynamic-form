import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth-guard.guard';
import { FormsComponent } from './pages/forms/forms.component';
import { LoginComponentsFormComponent } from './pages/login-components-form/login-components-form.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'forms',
    component: FormsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'forms-component',
    component: LoginComponentsFormComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
