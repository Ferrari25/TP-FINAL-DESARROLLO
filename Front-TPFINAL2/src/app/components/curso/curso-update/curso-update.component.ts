import {Component, OnInit} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import {CursoService} from "../../../services/curso.service";
import {Curso} from "../../../models/curso.model";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {TemaService} from "../../../services/tema.service";
import {EstudianteService} from "../../../services/estudiante.service";
import {DocenteService} from "../../../services/docente.service";
import {CommonModule, NgForOf} from "@angular/common";
import {Estudiante} from "../../../models/estudiante.model";

@Component({
  selector: 'app-curso-update',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgForOf,
    RouterLink,
  ],
  templateUrl: './curso-update.component.html',
  styleUrl: './curso-update.component.css'
})
export class CursoUpdateComponent implements OnInit {

  cursoActualizar: Curso = {
                            id: 0,
                            tema: { id: 0, nombre: '', descripcion: '' },
                            fechaInicio: new Date(),
                            fechaFin: new Date(),
                            docente: { id: 0, nombre: '', legajo: 0 },
                            precio: 0,
                            estudiantes: []
                            };

  public idActualizar: number | undefined;
  docentes: any[] = [];
  estudiantes: any[] = [];
  temas: any[] = [];
  estudiantesSeleccionados: Set<number> = new Set<number>();

  constructor(
    private cursoService: CursoService,
    private docenteService: DocenteService,
    private estudianteService: EstudianteService,
    private temaService: TemaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.idActualizar = +this.route.snapshot.paramMap.get('id')!;

    this.cursoService.getCursoById(this.idActualizar).subscribe(
      (data: Curso) => {
        // Convertir las fechas de string a Date
        data.fechaInicio = new Date(data.fechaInicio);
        data.fechaFin = new Date(data.fechaFin);
        this.cursoActualizar = data;
        this.estudiantesSeleccionados = new Set(data.estudiantes.map(e => e.id));
      },
      error => {
        console.error('Error al obtener curso', error);
      }
    );

    this.docenteService.getDocentesAll().subscribe(data => {this.docentes = data;});

    this.estudianteService.getEstudiantesAll().subscribe(data => {
      this.estudiantes = data;
    });

    this.temaService.getTemasAll().subscribe(data => {
      this.temas = data;
    });
  }

  onCheckboxChange(event: any, estudianteId: number) {
    if (event.target.checked) {
      this.estudiantesSeleccionados.add(estudianteId);
    } else {
      this.estudiantesSeleccionados.delete(estudianteId);
    }
    this.cursoActualizar.estudiantes = Array.from(this.estudiantesSeleccionados).map(id => ({ id } as Estudiante));
  }

  onUpdateCurso() {
    this.cursoService.updateCurso(this.idActualizar, this.cursoActualizar).subscribe(
      (data: Curso) => {
        this.router.navigate(['/curso/view-curso']);
      },
      (error: any) => {
        alert("Error al actualizar curso");
        console.error('Error al actualizar curso', error);
      }
    );
  }
}
