import { Component } from '@angular/core';
import { GamesRe } from '../../../models/games.model';
import { Observable } from 'rxjs';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrl: './conteudo.component.sass'
})
export class ConteudoComponent {

  games$ = new Observable<GamesRe[]>();
  constructor(private gamesService:GamesService){
    this.games$ = this.gamesService.DadosGames()
  }

}
