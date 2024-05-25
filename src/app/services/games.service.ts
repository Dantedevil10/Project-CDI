import { GamesRe } from './../../models/games.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';


@Injectable({
    providedIn:"root"
})
export class GamesService{

    private urlapi = 'http://localhost:8080/api/games'
    private urlfakeapi = 'http://localhost:3000'

    constructor(private http:HttpClient){

    }

    Dados(){
      return this.http.get<GamesRe[]>(this.urlfakeapi)
    }
    SalvarDados(gravar:Partial<GamesRe>){
      return this.http.post<GamesRe>(this.urlapi,gravar)
    }


}
