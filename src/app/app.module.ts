import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Componentes/header/header.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { HomeComponent } from './Paginas/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CadastroComponent } from './Componentes/cadastro/cadastro.component';
import { SobreNosComponent } from './Paginas/sobre-nos/sobre-nos.component';
import { ContatoComponent } from './Paginas/contato/contato.component';
import { AjudaComponent } from './Paginas/ajuda/ajuda.component';
import { LoginComponent } from './Componentes/login/login.component';
import { CompotestComponent } from './testecompo/compotest/compotest.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CompotestListComponent } from './testecompo/compotest-list/compotest-list.component';
import { ConteudoComponent } from './Paginas/conteudo/conteudo.component';
import { ConteudoDetalheComponent } from './Componentes/conteudo-detalhe/conteudo-detalhe.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CadastroComponent,
    SobreNosComponent,
    ContatoComponent,
    AjudaComponent,
    LoginComponent,
    CompotestComponent,
    CompotestListComponent,
    ConteudoComponent,
    ConteudoDetalheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
