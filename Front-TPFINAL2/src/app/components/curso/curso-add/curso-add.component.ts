import {Component, OnInit} from '@angular/core';
import {Curso} from "../../../models/curso.model";
import {CursoService} from "../../../services/curso.service";
import {FormsModule} from "@angular/forms";
import {DatePipe, NgForOf} from "@angular/common";
import {Estudiante} from "../../../models/estudiante.model";
import {EstudianteService} from "../../../services/estudiante.service";

@Component({
  selector: 'app-curso-add',
  standalone: true,
  imports: [
    FormsModule,
    DatePipe,
    NgForOf
  ],
  templateUrl: './curso-add.component.html',
  styleUrl: './curso-add.component.css'
})
export class CursoAddComponent implements OnInit {

  curso: Curso = new Curso(0, {id: 0, nombre: '', descripcion: ''}, new Date(), new Date(), {id: 0, nombre: '', legajo: 0}, 0, []);
  estudiantes: Estudiante[] = [];
  estudianteSeleccionado: Estudiante | undefined;

  constructor(private cursoService: CursoService, private estudianteService: EstudianteService) {}

  ngOnInit(): void {
    this.estudianteService.getEstudiantesAll().subscribe((data: Estudiante[]) => {
      this.estudiantes = data;
    });
  }

  agregarEstudiante(): void {
    if (this.estudianteSeleccionado && !this.curso.estudiantes.some(e => e.id === this.estudianteSeleccionado?.id)) {
      this.curso.estudiantes.push(this.estudianteSeleccionado);
    }
  }

  eliminarEstudiante(index: number): void {
    this.curso.estudiantes.splice(index, 1);
  }

  onSubmit() {
    console.log('Curso a enviar:', this.curso); // Verificar el contenido del curso
    this.cursoService.saveCurso(this.curso).subscribe(
      (response) => {
        console.log('Curso guardado:', response); // Verificar la respuesta del backend
        alert('Curso agregado exitosamente');
        this.curso = new Curso(0, {id: 0, nombre: '', descripcion: ''}, new Date(), new Date(), {id: 0, nombre: '', legajo: 0}, 0, []);
      },
      (error) => {
        console.error('Error al guardar el curso:', error); // Manejar errores
      }
    );
  }
}
