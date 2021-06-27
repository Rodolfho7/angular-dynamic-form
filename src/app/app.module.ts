import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from './form-services/forms.module';
import { AuthGuard } from './guards/auth-guard.guard';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PagesModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
