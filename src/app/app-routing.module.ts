import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Paginas/home/home.component';
import { CadastroComponent } from './Paginas/cadastro/cadastro.component';
import { SobreNosComponent } from './Paginas/sobre-nos/sobre-nos.component';
import { ContatoComponent } from './Paginas/contato/contato.component';
import { AjudaComponent } from './Paginas/ajuda/ajuda.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'sobre-nos', component: SobreNosComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'ajuda', component: AjudaComponent },
  { path: '**', component: HomeComponent }, // Rota Principal Caso O Caminho Não Seja Encontrado
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
