import { GamesRe } from './../../models/games.model';
import { GamesService } from './../../services/games.service';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {

  games: GamesRe[] = [];
  // games = new Observable<GamesRe[]>();

  constructor(private GamesService:GamesService){

    this.Obter3JogosDisp()
 
  }
  
  Obter3JogosDisp() {
    this.GamesService.ObterJogos()
    .subscribe(games => this.games=games.slice(1,6))
    // this.games = this.GamesService.ObterJogos();

  }
  
}
