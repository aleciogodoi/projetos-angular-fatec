import { Injectable } from '@angular/core';
import { MatSnackBar} from "@angular/material/snack-bar";
import { HttpClient } from '@angular/common/http';
import { Curso } from '../curso.modelo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  url = "http://localhost:3001/cursos";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, "X" ,{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: ['msg-success']
    })
  }

  create(curso: Curso): Observable<Curso> {
    return this.http.post<Curso>(this.url, curso);
  }

  read(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.url);
  }

  readById(id: String): Observable<Curso> {
    const url = `${this.url}/${id}`;
    return this.http.get<Curso>(url);
  }

  update(curso: Curso): Observable<Curso> {
    const url = `${this.url}/${curso.id}`;
    return this.http.put<Curso>(url, curso);
  }

  delete(id: String): Observable<Curso> {
    const url = `${this.url}/${id}`;
    return this.http.delete<Curso>(url);
  }
}
