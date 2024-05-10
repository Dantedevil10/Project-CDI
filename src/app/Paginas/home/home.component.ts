import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {
  constructor(private http: HttpClient){}
  listaGames:any = null
  getHero(){

    this.http.get('https://rawg-video-games-database.p.rapidapi.com/games')
    .subscribe({
      next:(data:any)=>{console.log(data)
        this.listaGames = data},
      error:(error:any)=>{console.log(error)}
    })
  
  }
  ngOnInit() {
    this.getHero();
  }
}
