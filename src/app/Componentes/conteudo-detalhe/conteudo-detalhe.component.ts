import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesRe } from '../../../models/games.model';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-conteudo-detalhe',
  templateUrl: './conteudo-detalhe.component.html',
  styleUrl: './conteudo-detalhe.component.sass'
})
export class ConteudoDetalheComponent {

  games?:GamesRe;
  constructor(private gamesService:GamesService,private route:ActivatedRoute){
    this.getGames()
  }

  getGames(){
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.gamesService.getGame(id).subscribe((game)=>this.games=game);
  }
}
