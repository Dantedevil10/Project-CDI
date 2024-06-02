import { Component,Input} from '@angular/core';
import { GamesService } from '../../services/games.service';
import { Users } from '../../../models/extra.model';
import { Router,ActivatedRoute } from '@angular/router';
import { FormBuilder, NonNullableFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.sass'
})
export class CadastroComponent {

  @Input() users:Users[]=[]
  form = this.formB.group({
    username: [''],
    cpf:[''],
    email:[''],
    datanascimento:['']
  })

  constructor(private gamesService:GamesService,private formB:NonNullableFormBuilder,
    private route: ActivatedRoute, private router: Router){}

  onSubmit(){
    this.gamesService.SalvarDados(this.form.value)
    .subscribe((result)=>{
      alert('Salvo Com Sucesso')
      this.router.navigate(['/conteudo'])},
      (error)=>{alert('erro ao salvar dados')})
  }

}
