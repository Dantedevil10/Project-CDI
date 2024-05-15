import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from '../../environments/environment';
import { GamesRe } from '../../models/games.model';

@Injectable({
    providedIn:"root"
})
export class GamesService{

    private url = environment.api
    
    constructor(private HttpClient:HttpClient){
     
    }
    ObterJogos(){
        return this.HttpClient.get<GamesRe[]>(this.url + '/games');
    }

}