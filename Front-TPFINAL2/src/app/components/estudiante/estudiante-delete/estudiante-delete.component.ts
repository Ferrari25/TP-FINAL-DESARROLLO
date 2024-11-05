import {Component, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Estudiante} from "../../../models/estudiante.model";
import {EstudianteService} from "../../../services/estudiante.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-estudiante-delete',
  standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
  templateUrl: './estudiante-delete.component.html',
  styleUrl: './estudiante-delete.component.css'
})
export class EstudianteDeleteComponent implements OnInit {

  estudiante: Estudiante = new Estudiante(0, '', new Date() );
  estudianteEliminar: Estudiante = new Estudiante(0, '', new Date() );
  idEliminar: number | undefined;

  constructor(private estudianteService: EstudianteService,private route: ActivatedRoute) {}

  ngOnInit() {
    // Captura el ID de la URL
    this.idEliminar = +this.route.snapshot.paramMap.get('id')!; // El signo de admiración indica que no será nulo

    // Cargar los datos del estudiante a modificar
    this.estudianteService.getEstudianteById(this.idEliminar).subscribe((data: Estudiante) => {
      this.estudianteEliminar = data; // Asigna los datos al formulario
    }, error => {
      console.error('Error al obtener el estudiante', error);
    });}


  onDeleteEstudiante() {
    this.estudianteService.deleteEstudiante(this.idEliminar).subscribe(() => {
      alert('Estudiante eliminado exitosamente');
      this.estudiante = new Estudiante(0, '', new Date() );
    });
  }
}
