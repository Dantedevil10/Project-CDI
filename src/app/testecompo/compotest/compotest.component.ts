import { Component, EventEmitter,Input,Output } from '@angular/core';
//import { GamesRe } from '../../../models/games.model';
import { GamesService } from '../../services/games.service';
import { Observable } from 'rxjs';
import { NonNullableFormBuilder } from '@angular/forms';


@Component({
  selector: 'app-compotest',
  templateUrl: './compotest.component.html',
  styleUrl: './compotest.component.sass'
})
export class CompotestComponent {

  //@Output() edit = new EventEmitter<GamesRe>();

  //games$: Observable<GamesRe[]>
  // form = this.formB.group({
  //   nomedojogo: [''],
  //   imagem:[''],
  //   sumario:[''],
  //   plataforma:[''],
  //   anodelancamento:[0]
  // })

  constructor(private gamesService:GamesService,private formB:NonNullableFormBuilder){

   // this.games$=this.gamesService.Dados();
  }

  // Edit(games:GamesRe){
  //   this.edit.emit(games)
  // }


  Obter():void{
    // this.games=this.gamesService.Dados();

  }
  // onSubmit(){
  //   this.gamesService.SalvarDados(this.form.value)
  //   .subscribe(result=>alert('Salvo Com Sucesso'+result),
  //   error=>alert('erro ao salvar dados' + error))
  // }
}
