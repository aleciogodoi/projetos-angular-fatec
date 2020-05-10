import { Component, OnInit } from '@angular/core';
import { CursosService } from "../cursos.service";

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  constructor(private cursosService: CursosService) {}

  cursos: string[];
  curso: string;

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
  }
  
  novoCurso(curso){
    this.cursosService.addCursos(curso);
    this.curso="";
  }

  excluiCurso(curso){
    this.cursosService.delCurso(curso);
    this.curso="";
  }
}
