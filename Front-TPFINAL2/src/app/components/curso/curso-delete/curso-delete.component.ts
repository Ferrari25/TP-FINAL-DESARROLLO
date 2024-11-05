import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Docente} from "../../../models/docente.model";
import {DocenteService} from "../../../services/docente.service";
import {Curso} from "../../../models/curso.model";
import {CursoService} from "../../../services/curso.service";

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
export class CursoDeleteComponent {

  curso: Curso = new Curso(0, {id: 0, nombre: '', descripcion: ''}, new Date(), new Date(), {id: 0, nombre: '', legajo: 0}, 0, []);
  idEliminar: any;

  constructor(private cursoService: CursoService) {}

  onDeleteCurso() {
    this.cursoService.deleteCurso(this.idEliminar).subscribe(() => {
      alert('Curso Eliminado exitosamente');
      this.curso = new Curso(0, {id: 0, nombre: '', descripcion: ''}, new Date(), new Date(), {id: 0, nombre: '', legajo: 0}, 0, []);
    });
  }
}
