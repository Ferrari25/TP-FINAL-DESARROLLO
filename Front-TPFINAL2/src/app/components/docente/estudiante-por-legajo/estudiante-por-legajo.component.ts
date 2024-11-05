import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Docente} from "../../../models/docente.model";
import {Estudiante} from "../../../models/estudiante.model";
import {DocenteService} from "../../../services/docente.service";
import {EstudianteService} from "../../../services/estudiante.service";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-estudiante-por-legajo',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './estudiante-por-legajo.component.html',
  styleUrl: './estudiante-por-legajo.component.css'
})
export class EstudiantePorLegajoComponent implements OnInit {
  estudiantes: Estudiante[] = [];
  docenteLegajo: number = 0;

  constructor(private docenteService: DocenteService) {}

  ngOnInit(): void {}

  cargarEstudiantesPorDocente(): void {
    if (this.docenteLegajo) {
      this.docenteService.getEstudiantesPorLegajoDocente(this.docenteLegajo).subscribe(
        (estudiantes) => (this.estudiantes = estudiantes),
        (error) =>
          console.error("Error cargando estudiantes por legajo del docente", error)
      );
    } else {
      this.estudiantes = [];
    }
  }
}
