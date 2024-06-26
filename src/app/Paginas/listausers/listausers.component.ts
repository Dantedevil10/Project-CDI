import { Component } from '@angular/core';
import { Users } from '../../../models/extra.model';
import { GamesService } from '../../services/games.service';
import { Observable } from 'rxjs';
import { NonNullableFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-listausers',
  templateUrl: './listausers.component.html',
  styleUrl: './listausers.component.sass'
})
export class ListausersComponent {

  users$: Observable<Users[]>

  constructor(private gamesService:GamesService,private formB:NonNullableFormBuilder){
    this.users$=this.gamesService.DadosUsers();
  }

}
