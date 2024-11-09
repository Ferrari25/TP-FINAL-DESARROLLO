import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {EstudianteService} from "../../../services/estudiante.service";
import {Estudiante} from "../../../models/estudiante.model";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-estudiante-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './estudiante-list.component.html',
  styleUrl: './estudiante-list.component.css'
})
export class EstudianteListComponent implements OnInit {

  estudiantes: Estudiante[] = [];

  constructor(private estudianteService: EstudianteService) { }

  ngOnInit(): void {
    this.estudianteService.getEstudiantesAll().subscribe(
      response => {
        this.estudiantes = response; // Asigna la respuesta a la variable
        console.log(this.estudiantes); // Verifica si la lista se está llenando
      },
      error => {
        console.error('Error al obtener estudiantes', error);
      }
    );
  }

}
