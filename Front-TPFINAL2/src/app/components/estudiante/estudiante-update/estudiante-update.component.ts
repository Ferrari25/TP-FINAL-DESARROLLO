import {Component, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Estudiante} from "../../../models/estudiante.model";
import {EstudianteService} from "../../../services/estudiante.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-estudiante-update',
  standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
  templateUrl: './estudiante-update.component.html',
  styleUrl: './estudiante-update.component.css'
})
export class EstudianteUpdateComponent implements OnInit {

  estudiante: Estudiante | undefined;
  estudianteActualizar: Estudiante = new Estudiante(0, '', new Date() );
  public idActualizar: number | undefined;

  constructor(
    private estudianteService: EstudianteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.idActualizar = +this.route.snapshot.paramMap.get('id')!;

    this.estudianteService.getEstudianteById(this.idActualizar).subscribe(
      (data: Estudiante) => {
        this.estudianteActualizar = data;
      },
      error => {
        console.error('Error al obtener estudiante', error);
      }
    );
  }

  onUpdateEstudiante() {
    this.estudianteService.updateEstudiante(this.idActualizar, this.estudianteActualizar).subscribe(
      (data: Estudiante) => {
        this.router.navigate(['/estudiante/view-estudiante']);
      },
      (error: any) => {
        alert("Error al actualizar estudiante");
        console.error('Error al obtener estudiante', error);
      }
    );
  }
}


