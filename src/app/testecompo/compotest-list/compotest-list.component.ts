import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, NonNullableFormBuilder } from '@angular/forms';
import { GamesService } from '../../services/games.service';
import { Users } from '../../../models/extra.model';
import { Router,ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-compotest-list',
  templateUrl: './compotest-list.component.html',
  styleUrl: './compotest-list.component.sass'
})
export class CompotestListComponent {

  @Input() users:Users[]=[]
  //@Output() edit = new EventEmitter(false)

  form = this.formB.group({
    username: [''],
    cpf:[''],
    email:[''],
    datanascimento:['']
  })

  constructor(private gamesService:GamesService,private formB:NonNullableFormBuilder,
    private route: ActivatedRoute, private router: Router
  ){



  }
  onSubmit(){
    this.gamesService.SalvarDados(this.form.value)
    .subscribe(result=>alert('Salvo Com Sucesso'+result),
    error=>alert('erro ao salvar dados' + error))
  }
  // Edit(games:GamesRe){
  //   this.edit.emit(games)
  //   // this.router.navigate(['edit',games.id],{relativeTo: this.route})
  // }

}
