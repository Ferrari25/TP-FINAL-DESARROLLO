import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Estudiante} from "../../../models/estudiante.model";
import {DocenteService} from "../../../services/docente.service";
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {Curso} from "../../../models/curso.model";
import {CursoService} from "../../../services/curso.service";

@Component({
  selector: 'app-estudiante-por-legajo',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    DatePipe
  ],
  templateUrl: './estudiante-por-legajo.component.html',
  styleUrl: './estudiante-por-legajo.component.css'
})
export class EstudiantePorLegajoComponent implements OnInit {
  docenteLegajoForm: FormGroup;
  formSubmitted: boolean | undefined;

  estudiantes: Estudiante[] = [];
  docenteLegajo: number = 0;
  nombreDocente: string = '';

  constructor(private docenteService: DocenteService,private fb: FormBuilder) {

    this.docenteLegajoForm = new FormGroup({
      docenteLegajo: new FormControl('')
    });
  }
  ngOnInit(): void {
    this.docenteLegajoForm = this.fb.group({
      docenteLegajo: ['']
    });
  }

  obtenerEstudiantesPorLegajoDocente(): void {
    this.formSubmitted = true;
    const legajoDocente = this.docenteLegajoForm.get('docenteLegajo')?.value;

    if (legajoDocente) {
      this.docenteService.getDocenteById(legajoDocente).subscribe((docente) => {
        this.nombreDocente = docente.nombre;
      })

      this.docenteService.getEstudiantesPorLegajoDocente(legajoDocente).subscribe(
        (estudiantes) => (this.estudiantes = estudiantes),
        (error) => {
          console.error("Error cargando estudiantes por legajo del docente", error);
          this.estudiantes = [];
        }
      );
    } else {
      this.estudiantes = [];
      this.nombreDocente= "";
    }
  }



}







