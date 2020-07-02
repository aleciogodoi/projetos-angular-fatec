import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curso-update',
  templateUrl: './curso-update.component.html',
  styleUrls: ['./curso-update.component.css']
})
export class CursoUpdateComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  updateCurso(){
  }
  
  cancel() {
    this.router.navigate(['/cursos']);
  }

}
