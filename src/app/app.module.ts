import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Componentes/header/header.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { HomeComponent } from './Paginas/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CadastroComponent } from './Paginas/cadastro/cadastro.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
