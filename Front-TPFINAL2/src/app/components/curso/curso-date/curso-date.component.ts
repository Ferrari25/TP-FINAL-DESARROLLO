import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule, FormBuilder} from '@angular/forms';
import {CursoService} from "../../../services/curso.service";
import {Curso} from "../../../models/curso.model";
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-curso-date',
  templateUrl: './curso-date.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, DatePipe, NgIf, NgForOf],
  styleUrl:'./curso-date.component.css'
})

export class CursoDateComponent implements OnInit {
  cursoDateForm: FormGroup;
  cursos: Curso[] = [];
  formSubmitted: boolean | undefined;

  constructor(private cursoService: CursoService,
              private fb: FormBuilder,
              private router: Router,) {

    this.cursoDateForm = new FormGroup({
      //fechaInicio: new FormControl(''),
      fechaFin: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.cursoDateForm = this.fb.group({
      fechaFin: ['']  // Formulario con un campo de fecha
    });
  }

  buscarCursos(): void {
    this.formSubmitted = true;
    const { fechaFin } = this.cursoDateForm.value;

    // Verifica si hay una fecha seleccionada
    if (fechaFin) {
      this.cursoService.getCursosByFecha(fechaFin).subscribe(
        (result: Curso[]) => {
          this.cursos = result;
        },
        (error) => {
          console.error('Error al obtener los cursos:', error);
        }
      );
    }
  }

  onCancel() {
    this.router.navigate(['/curso/view-curso']);
  }

}
