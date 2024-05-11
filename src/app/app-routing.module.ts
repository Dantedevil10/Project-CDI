import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Paginas/home/home.component';
import { CadastroComponent } from './Paginas/cadastro/cadastro.component';

const routes: Routes = [{path:'home',component:HomeComponent},
{path:'cadastro',component:CadastroComponent},
{path:'**',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
