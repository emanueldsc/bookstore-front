import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../categoria.model';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-create',
  templateUrl: './categoria-create.component.html',
  styleUrls: ['./categoria-create.component.css']
})
export class CategoriaCreateComponent implements OnInit {

  categoria: Categoria = {
    nome: '',
    descricao: ''
  }

  constructor(
    private service: CategoriaService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  create(): void {
    this.service.create(this.categoria).subscribe(response => {
      this.service.mensagem('Categoria criada com sucesso!')
      this.router.navigate(["categorias"])
    }, err => {
      console.error(err)
      const msgErrs = err.error.errors
      for(let i = 0; i < msgErrs.length; i++) {
        this.service.mensagem(msgErrs[i].message)
      }
    })
  }

  cancel(): void {
    this.router.navigate(['categorias'])
  }

}
