import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Tema} from "../models/tema.model";


@Injectable({
  providedIn: 'root'
})
export class TemaService {
  private apiUrl = 'http://localhost:8080/api/tema';

  constructor(private http: HttpClient) {}

  getTemasAll(): Observable<Tema[]> {
    return this.http.get<Tema[]>(this.apiUrl);
  }
  saveTema(tema: Tema): Observable<Tema> {
    return this.http.post<Tema>(this.apiUrl, tema);
  }
  deleteTema(id: number): Observable<void> {
    alert("TEMA ELIMINADO")
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getTemaById(id: number | undefined): Observable<Tema> {
    return this.http.get<Tema>(`${this.apiUrl}/${id}`);
  }

  updateTema(id: number | undefined, tema: Tema | undefined): Observable<Tema> {
     return this.http.put<Tema>(`${this.apiUrl}/${id}`, tema);
  }


}
