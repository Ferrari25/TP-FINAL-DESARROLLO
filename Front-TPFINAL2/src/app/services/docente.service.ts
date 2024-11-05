import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Docente } from '../models/docente.model';
import {Estudiante} from "../models/estudiante.model";

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  private apiUrl = 'http://localhost:8080/api/docentes';

  constructor(private http: HttpClient) { }

  getDocentesAll(): Observable<Docente[]> {
    console.log(Docente);
    return this.http.get<Docente[]>(this.apiUrl);
  }

  saveDocente(docente: Docente | undefined): Observable<Docente> {
    return this.http.post<Docente>(this.apiUrl, docente);
  }
  deleteDocente(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getDocenteById(id: number | undefined): Observable<Docente> {
    return this.http.get<Docente>(`${this.apiUrl}/${id}`);
  }

  updateDocente(id: number | undefined, docente: Docente | undefined): Observable<Docente> {
    return this.http.put<Docente>(`${this.apiUrl}/${id}`, docente);
  }

  getEstudiantesPorLegajoDocente(legajo: number): Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>(`${this.apiUrl}/legajo/${legajo}/estudiantes`,
    );
  }

}

