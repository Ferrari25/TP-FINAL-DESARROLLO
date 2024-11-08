import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estudiante } from '../models/estudiante.model';
import {Tema} from "../models/tema.model";

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  private apiUrl = 'http://localhost:8080/api/estudiantes';

  constructor(private http: HttpClient) { }

  getEstudiantesAll(): Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>(this.apiUrl);
  }

  getEstudianteById(id: number): Observable<Estudiante> {
    return this.http.get<Estudiante>(`${this.apiUrl}/${id}`);
  }

  saveEstudiante(estudiante: Estudiante): Observable<Estudiante> {
    return this.http.post<Estudiante>(this.apiUrl, estudiante);
  }

  deleteEstudiante(id: number | undefined): Observable<void> {
    alert("Estudiante con id:  " + id + "  eliminado");
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  updateEstudiante(id: number | undefined, estudiante: Estudiante | undefined): Observable<Estudiante> {
    alert("Estudiante con id:  " + id + "  actualizado");
    return this.http.put<Estudiante>(`${this.apiUrl}/${id}`, estudiante);
  }


  getEstudiantesPorLegajoDocente(legajoDocente: number): Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>(`${this.apiUrl}/por-docente/${legajoDocente}`);
  }

}

