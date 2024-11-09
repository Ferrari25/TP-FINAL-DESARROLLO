import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoService } from '../../../services/curso.service';
import { Curso } from '../../../models/curso.model';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-cursos-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.css'],
})
export class CursoListComponent implements OnInit {
  cursos: Curso[] = [];

  constructor(private cursoService: CursoService) {}

  ngOnInit(): void {
    this.cursoService.getCursosAll().subscribe((cursos: Curso[]) => {
        this.cursos = cursos;
        console.log('Lista actualizada de cursos:', this.cursos); // Puedes revisar si los datos están correctos
      },
      (error) => {
        console.error('Error al obtener cursos', error);
      }
    );
  }
}

