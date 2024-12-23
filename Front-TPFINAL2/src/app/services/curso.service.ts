import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso } from '../models/curso.model';
import {Estudiante} from "../models/estudiante.model";

@Injectable({
  providedIn: 'root',
})
export class CursoService {
  private apiUrl = 'http://localhost:8080/api/cursos'; // Cambia el endpoint si es necesario

  constructor(private http: HttpClient) {}

  getCursosAll(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.apiUrl);
  }

  getCursoById(id: number): Observable<Curso> {
    return this.http.get<Curso>(`${this.apiUrl}/${id}`);
  }

  saveCurso(curso: Curso): Observable<Curso> {
    return this.http.post<Curso>(this.apiUrl, curso);
  }

    updateCurso(id: number | undefined, curso: Curso): Observable<Curso> {
    alert("Curso con id:  " + id + "  Actualizado");
    return this.http.put<Curso>(`${this.apiUrl}/${id}`, curso);
  }

  deleteCurso(id: number): Observable<void> {
    alert("Curso con id:  " + id + "  Eliminado");
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getCursosByFecha(fecha: string): Observable<Curso[]> {
    return this.http.get<Curso[]>(`${this.apiUrl}/buscar-por-fecha`, { params: { fecha } });
  }

}
