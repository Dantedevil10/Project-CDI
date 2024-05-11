import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {
  constructor(private http: HttpClient){}
  
  imgforg:any[] = [
    'https://m.media-amazon.com/images/I/91VKfyGGkYL._AC_UF1000,1000_QL80_.jpg',
    'https://m.media-amazon.com/images/I/518wjkgeY5L._AC_UF1000,1000_QL80_.jpg',
    'https://i.pinimg.com/originals/c5/6c/77/c56c774ee09e3e16bf12460dea765109.jpg',
    'https://sm.ign.com/ign_br/game/v/valorant/valorant_5mxf.jpg',
    'https://preview.redd.it/jcd0799d5vd21.jpg?width=640&crop=smart&auto=webp&s=19647e92dfa193cbea3625f89262a83c84af5e8d',
    'https://upload.wikimedia.org/wikipedia/pt/3/30/Resident_Evil_4_%28remake%29.png',
  ]
  
  
  ngOnInit() {
    
  }
}
