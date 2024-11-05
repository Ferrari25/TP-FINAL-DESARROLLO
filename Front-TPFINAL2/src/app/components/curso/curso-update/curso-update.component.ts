import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CursoService} from "../../../services/curso.service";
import {Curso} from "../../../models/curso.model";

@Component({
  selector: 'app-curso-update',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './curso-update.component.html',
  styleUrl: './curso-update.component.css'
})
export class CursoUpdateComponent {
  curso: Curso;

  constructor(private cursoService: CursoService) {
    this.curso = new Curso(0, { id: 0, nombre: '', descripcion: '' }, new Date(), new Date(), { id: 0, nombre: '', legajo: 0 }, 0, []);
  }

  onUpdateCurso() {
    this.cursoService.updateCurso(this.curso.id, this.curso).subscribe(
      (data: Curso) => {
        alert('Curso actualizado exitosamente');
        // Reiniciar el formulario si es necesario
        this.curso = new Curso(0, { id: 0, nombre: '', descripcion: '' }, new Date(), new Date(), { id: 0, nombre: '', legajo: 0 }, 0, []);
      },
      (error: any) => {
        console.error('Error updating curso', error);
      }
    );
  }


}
