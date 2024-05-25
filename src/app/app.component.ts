import { Component,OnInit } from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {

  showHeader:boolean=true
  showFooter:boolean=true

  constructor(private router:Router){}

  ngOnInit(){
    this.router.events.subscribe(event=>{
      if(event instanceof NavigationEnd){
        this.showHeader = !['/cadastro','/login'].includes(event.url)
        this.showFooter = !['/cadastro','/login'].includes(event.url)
      }
    })
  }

}
