import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CursoService } from '../curso.service';
import { Curso } from './../../curso.modelo';

@Component({
  selector: 'app-curso-create',
  templateUrl: './curso-create.component.html',
  styleUrls: ['./curso-create.component.css']
})
export class CursoCreateComponent implements OnInit {

  curso: Curso = {
    descricao: null,
    duracao: null,
    preco: null
  }

  constructor(private router:Router, private cursoService: CursoService) { }

  ngOnInit() {
  }

  createCurso(): void {
    this.cursoService.create(this.curso).subscribe( () => {
      this.cursoService.showMessage("Curso Criado!");
      this.router.navigate(['/cursos']);
    })
  }

  cancel() {
    this.router.navigate(['/cursos']);
  }
}
