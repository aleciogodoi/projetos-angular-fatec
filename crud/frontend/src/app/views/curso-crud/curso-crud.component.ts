import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/template/header/header.service';

@Component({
  selector: 'app-curso-crud',
  templateUrl: './curso-crud.component.html',
  styleUrls: ['./curso-crud.component.css']
})
export class CursoCrudComponent implements OnInit {

  constructor(private router: Router, headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cursos',
      icon: 'school',
      routerUrl: '/cursos'
    }
  }


  ngOnInit() {
  }

  navigateToCursoCreate(): void {
    this.router.navigate(['/cursos/create']);
  }

}
