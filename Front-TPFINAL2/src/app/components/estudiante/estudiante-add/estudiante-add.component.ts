import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Tema} from "../../../models/tema.model";
import {TemaService} from "../../../services/tema.service";
import {Estudiante} from "../../../models/estudiante.model";
import {EstudianteService} from "../../../services/estudiante.service";

function newdate() {return "";}

@Component({
  selector: 'app-estudiante-add',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './estudiante-add.component.html',
  styleUrl: './estudiante-add.component.css'
})
export class EstudianteAddComponent {
  estudiante: Estudiante = new Estudiante(0, '', new Date());

  constructor(private estudianteService: EstudianteService) {}

  onSubmit() {
    this.estudianteService.saveEstudiante(this.estudiante).subscribe(() => {
      alert('Estudiante agregado exitosamente');
      this.estudiante = new Estudiante(0, '', new Date()); // Reset form
    });
  }
}
