import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, NonNullableFormBuilder } from '@angular/forms';
import { GamesService } from '../../services/games.service';
//import { GamesRe } from '../../../models/games.model';
import { Router,ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-compotest-list',
  templateUrl: './compotest-list.component.html',
  styleUrl: './compotest-list.component.sass'
})
export class CompotestListComponent {

  //@Input() games:GamesRe[]=[]
  //@Output() edit = new EventEmitter(false)

  form = this.formB.group({
    nomedojogo: [''],
    imagem:[''],
    sumario:[''],
    plataforma:[''],
    anodelancamento:[0]
  })

  constructor(private gamesService:GamesService,private formB:NonNullableFormBuilder,
    private route: ActivatedRoute, private router: Router
  ){



  }
  // onSubmit(){
  //   this.gamesService.SalvarDados(this.form.value)
  //   .subscribe(result=>alert('Salvo Com Sucesso'+result),
  //   error=>alert('erro ao salvar dados' + error))
  // }
  // Edit(games:GamesRe){
  //   this.edit.emit(games)
  //   // this.router.navigate(['edit',games.id],{relativeTo: this.route})
  // }

}
