import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CorreoComponent } from './Componets/correo/correo.component';
import { ListaCorreoComponent } from './Componets/lista-correo/lista-correo.component';

@NgModule({
  declarations: [AppComponent, CorreoComponent, ListaCorreoComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
