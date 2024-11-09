import {Component, OnInit} from '@angular/core';
import {Curso} from "../../../models/curso.model";
import {CursoService} from "../../../services/curso.service";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import {DatePipe, NgForOf} from "@angular/common";
import {Estudiante} from "../../../models/estudiante.model";
import {EstudianteService} from "../../../services/estudiante.service";
import {TemaService} from "../../../services/tema.service";
import {DocenteService} from "../../../services/docente.service";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-curso-add',
  standalone: true,
  imports: [
    FormsModule,
    DatePipe,
    NgForOf,
    ReactiveFormsModule
  ],
  templateUrl: './curso-add.component.html',
  styleUrl: './curso-add.component.css'
})
export class CursoAddComponent implements OnInit {

  cursoForm: FormGroup;
  docentes: any[] = [];
  estudiantes: any[] = [];
  temas: any[] = [];

  constructor(
    private fb: FormBuilder,
    private cursoService: CursoService,
    private docenteService: DocenteService,
    private estudianteService: EstudianteService,
    private temaService: TemaService,
    private router: Router
  ) {
    this.cursoForm = this.fb.group({
      tema: this.fb.group({
        id: ['', Validators.required]
      }),
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required],
      docente: this.fb.group({
        id: ['', Validators.required]
      }),
      precio: ['', Validators.required],
      estudiantes: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.docenteService.getDocentesAll().subscribe(data => {
      this.docentes = data;
    });

    this.estudianteService.getEstudiantesAll().subscribe(data => {
      this.estudiantes = data;
    });

    this.temaService.getTemasAll().subscribe(data => {
      this.temas = data;
    });
  }

  onCheckboxChange(event: any, estudiante: any) {
    const estudiantesArray = this.cursoForm.get('estudiantes') as FormArray;
    if (event.target.checked) {
      estudiantesArray.push(new FormGroup({
        id: new FormControl(estudiante.id)
      }));
    } else {
      const index = estudiantesArray.controls.findIndex(x => x.value.id === estudiante.id);
      estudiantesArray.removeAt(index);
    }
  }

  onSubmit() {
    if (this.cursoForm.valid) {
      this.cursoService.saveCurso(this.cursoForm.value).subscribe(response => {
        this.router.navigate(['/curso/view-curso']);
        console.log('CURSO CREADO:', response);
      });
    }
  }

  onCancel() {
    this.router.navigate(['/curso/view-curso']);
  }
}
