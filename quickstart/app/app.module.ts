
import { NgModule }      from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component'; //Componente que acabamos de definir

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
