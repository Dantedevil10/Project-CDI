import { Component, EventEmitter,Input,Output } from '@angular/core';
import { Users } from '../../../models/extra.model';
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

  users$: Observable<Users[]>


  constructor(private gamesService:GamesService,private formB:NonNullableFormBuilder){

    this.users$=this.gamesService.DadosUsers();
  }

  // Edit(games:GamesRe){
  //   this.edit.emit(games)
  // }


  Obter():void{
    // this.games=this.gamesService.DadosUsers();

  }
  
}
