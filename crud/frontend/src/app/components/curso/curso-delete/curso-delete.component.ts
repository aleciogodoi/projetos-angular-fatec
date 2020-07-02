import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curso-delete',
  templateUrl: './curso-delete.component.html',
  styleUrls: ['./curso-delete.component.css']
})
export class CursoDeleteComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  deleteCurso(){

  }

  cancel(){
    this.router.navigate(['/cursos']);
  }

}
