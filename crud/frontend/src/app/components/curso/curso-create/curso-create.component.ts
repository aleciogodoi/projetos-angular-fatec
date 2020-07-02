import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curso-create',
  templateUrl: './curso-create.component.html',
  styleUrls: ['./curso-create.component.css']
})
export class CursoCreateComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  createCurso() {
    this.router.navigate(['/cursos']);
  }

  cancel() {
    this.router.navigate(['/cursos']);
  }
}
