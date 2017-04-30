import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormValidationComponent } from './forms/app.formvalidation';
@NgModule({
  declarations: [
    AppComponent,FormValidationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
