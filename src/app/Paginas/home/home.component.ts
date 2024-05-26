import { GamesRe } from './../../../models/games.model';
import { GamesService } from './../../services/games.service';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {
  // games: GamesRe[] = [];   => Jeito Menos Profissional Não Apague

  games = new Observable<GamesRe[]>();

  constructor(private GamesService:GamesService){

    this.Obter3JogosDisp()

  }

  Obter3JogosDisp() {
    // this.GamesService.ObterJogos()
    // .subscribe(games => this.games=games.slice(1,6))   => Jeito Menos Profissional Não Apague


    this.games = this.GamesService.Dados().pipe(map(games=>games.slice(0,5)));


  }


}
