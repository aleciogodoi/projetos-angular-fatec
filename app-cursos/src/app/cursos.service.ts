import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  cursos: string[] = ["Cobol", "Basic", "JavaScript", "C", "Angular", "Node.JS"];
  constructor() { }

  //Retornar as lista de cursos
  getCursos(){
    return this.cursos;
  }
  //Adicionar um novo cursos
  addCursos(curso){
    if (this.cursos.indexOf(curso) == -1)
      this.cursos.push(curso);
  }
  // Deleta curso
  delCurso(curso){
      let i = this.cursos.indexOf(curso);
      if (i != -1) 
        this.cursos.splice(i,1);
  }
}
