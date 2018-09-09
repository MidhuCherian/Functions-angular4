import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { IncrementComponent } from './increment/increment.component';
import { ValidatorComponent } from './validator/validator.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    IncrementComponent,
    ValidatorComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
