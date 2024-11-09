import {Component, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Docente} from "../../../models/docente.model";
import {DocenteService} from "../../../services/docente.service";
import {Curso} from "../../../models/curso.model";
import {CursoService} from "../../../services/curso.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Estudiante} from "../../../models/estudiante.model";

@Component({
  selector: 'app-curso-delete',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './curso-delete.component.html',
  styleUrl: './curso-delete.component.css'
})
export class CursoDeleteComponent implements OnInit {

  curso: Curso = new Curso(0, { id: 0, nombre: '', descripcion: '' }, new Date(), new Date(), { id: 0, nombre: '', legajo: 0 }, 0, []);
  idEliminar: number | undefined;

  constructor(private cursoService: CursoService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.idEliminar = +this.route.snapshot.paramMap.get('id')!;
    this.cursoService.getCursoById(this.idEliminar).subscribe((data: Curso) => {
      this.curso = data;
    }, error => {
      console.error('Error al obtener el curso', error);
    });
  }

  onDeleteCurso() {
    if (this.idEliminar === undefined || this.idEliminar === null) {
      console.error('El ID del curso es inválido o no está definido');
      return;
    }
    this.cursoService.deleteCurso(this.idEliminar).subscribe(() => {
      alert('Curso eliminado exitosamente');
      this.router.navigate(['/curso/view-curso']); // Navegar a la vista de cursos después de eliminar
    }, error => {
      console.error('Error al eliminar el curso', error);
    });
  }
}
