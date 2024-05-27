import { GamesRe } from './../../models/games.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Users } from '../../models/extra.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:"root"
})
export class GamesService{

    private urlapiuser = 'http://localhost:8080/api/users';
    private urlapigames = 'http://localhost:3000/games';

    constructor(private http:HttpClient){

    }

    DadosGames(){
      return this.http.get<GamesRe[]>(this.urlapigames);
    }
    DadosUsers(){
      return this.http.get<Users[]>(this.urlapiuser);
    }

    SalvarDados(gravar:Partial<Users>){
      return this.http.post<Users>(this.urlapiuser,gravar);
    }
    getGame(id:number):Observable<GamesRe>{
      return this.http.get<GamesRe>(`${this.urlapigames}/${id}`);
    }

}
