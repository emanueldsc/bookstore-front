import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../categoria.model';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-read',
  templateUrl: './categoria-read.component.html',
  styleUrls: ['./categoria-read.component.css']
})
export class CategoriaReadComponent implements OnInit {

  categorias: Categoria[] = []
  displayedColumns: string[] = ['id', 'name', 'description', 'livros', 'action'];

  constructor(
    private service: CategoriaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.findAll().subscribe(response => {
      console.log(response)
      this.categorias = response
    })

  }

  navigateRoCategoryCreate(): void {
    this.router.navigate(["categorias/create"])
  }

}
