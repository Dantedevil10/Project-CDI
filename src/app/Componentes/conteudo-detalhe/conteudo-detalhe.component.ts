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
  adinfops1:string=''
  adinfops2:string=''
  adinfops3:string=''
  adinfoPsp:string=''
  adinfoWii:string=''
  adinfoGC:string=''


  constructor(private gamesService:GamesService,private route:ActivatedRoute){
    this.getGames()
    this.MudaTexto(this.games)
  }

  getGames(){
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.gamesService.getGame(id).subscribe((game)=>{this.games=game;
      this.MudaTexto(game)
    });
  }

  MudaTexto(q?:GamesRe){
    q?.plataform.includes('PS2') ? this.adinfops2=`Se Não Tiver o Console Original
    (Playstation2) <br> Você Também Pode Jogar Este Game Via Emulação Com o Emulador De Ps2 (PCSX2)`
    : this.adinfops2=''

    q?.plataform.includes('PS1') ? this.adinfops1=`Se Não Tiver o Console Original
    (Playstation / PSOne) <br> Você Também Pode Jogar Este Game Via Emulação Com o Emulador De Ps1 (Duckstation)`
    : this.adinfops1=''

    q?.plataform.includes('PS3') ? this.adinfops3=`Se Não Tiver o Console Original
    (Playstation 3) <br> Você Também Pode Jogar Este Game Via Emulação Com o Emulador De Ps3 (RPCS3) <br>
    AVISO => Olhe Os Requisitos Pois Emular Ps3 é Uma Tarefa Difícil E Requer Muito Do Seu PC`
    : this.adinfops3=''

    q?.plataform.includes('PSP') ? this.adinfoPsp=`Se Não Tiver o Console Original
    (Playstation Portable) <br> Você Também Pode Jogar Este Game Via Emulação Com o Emulador De PSP (PPSSPP)`
    : this.adinfoPsp=''

    q?.plataform.includes('NintendoGC') ? this.adinfoWii=`Se Não Tiver o Console Original
    (NintendoGC / Wii) <br> Você Também Pode Jogar Este Game Via Emulação Com o Emulador (Dolphin)`
    : this.adinfoWii=''

    q?.plataform.includes('Wii') ? this.adinfoGC=`Se Não Tiver o Console Original
    (NintendoGC / Wii) <br> Você Também Pode Jogar Este Game Via Emulação Com o Emulador (Dolphin)`
    : this.adinfoGC=''
  }

}
