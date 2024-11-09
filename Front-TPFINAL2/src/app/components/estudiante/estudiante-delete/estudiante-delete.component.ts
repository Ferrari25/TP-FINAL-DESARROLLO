import {Component, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Estudiante} from "../../../models/estudiante.model";
import {EstudianteService} from "../../../services/estudiante.service";
import {ActivatedRoute, Router} from "@angular/router";

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

  constructor(
    private estudianteService: EstudianteService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.idEliminar = +this.route.snapshot.paramMap.get('id')!;
    this.estudianteService.getEstudianteById(this.idEliminar).subscribe((data: Estudiante) => {
      this.estudianteEliminar = data;
    }, error => {
      console.error('Error al obtener el estudiante', error);
    });}

  onDeleteEstudiante() {
    if (this.idEliminar === undefined || this.idEliminar === null) {
      console.error('El ID del estudiante es inválido o no está definido');
      return;
    }
    this.estudianteService.deleteEstudiante(this.idEliminar).subscribe(
      () => {
        this.router.navigate(['/estudiante/view-estudiante']);
      },
      (error: any) => {
        console.error('Error al eliminar estudiante', error);
      }
    );
  }


  onCancel() {
    this.router.navigate(['/estudiante/view-estudiante']);
  }
}
