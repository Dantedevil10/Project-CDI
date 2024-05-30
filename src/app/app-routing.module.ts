import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Paginas/home/home.component';
import { CadastroComponent } from './Componentes/cadastro/cadastro.component';
import { SobreNosComponent } from './Paginas/sobre-nos/sobre-nos.component';
import { ContatoComponent } from './Paginas/contato/contato.component';
import { AjudaComponent } from './Paginas/ajuda/ajuda.component';
import { LoginComponent } from './Componentes/login/login.component';
import { ConteudoComponent } from './Paginas/conteudo/conteudo.component';
import { ConteudoDetalheComponent } from './Componentes/conteudo-detalhe/conteudo-detalhe.component';
import { ListausersComponent } from './Paginas/listausers/listausers.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sobre-nos', component: SobreNosComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'ajuda', component: AjudaComponent },
  { path: 'lista', component: ListausersComponent },
  { path: 'conteudo', component: ConteudoComponent },
  { path: 'conteudo/:id', component: ConteudoDetalheComponent },
  { path: '**', component: HomeComponent }, // Rota Principal Caso O Caminho Não Seja Encontrado
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
