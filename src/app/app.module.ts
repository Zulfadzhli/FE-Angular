import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PaginationModule } from 'ngx-bootstrap/pagination';


import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';

import { HttpClientModule } from '@angular/common/http';


import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    PaginationModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
