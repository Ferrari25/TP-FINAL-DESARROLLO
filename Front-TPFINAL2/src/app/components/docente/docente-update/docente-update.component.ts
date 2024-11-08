import {Component, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Tema} from "../../../models/tema.model";
import {TemaService} from "../../../services/tema.service";
import {Docente} from "../../../models/docente.model";
import {DocenteService} from "../../../services/docente.service";
import {Estudiante} from "../../../models/estudiante.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-docente-update',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './docente-update.component.html',
  styleUrl: './docente-update.component.css'
})
export class DocenteUpdateComponent implements OnInit{

  docente: Docente | undefined;
  docenteActualizar: Docente = new Docente(0, '', 0);
  public idActualizar: number | undefined;

  constructor(
    private docenteService: DocenteService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    // Captura el ID de la URL
    this.idActualizar = +this.route.snapshot.paramMap.get('id')!; // El signo de admiración indica que no será nulo

    // Cargar los datos del estudiante a modificar
    this.docenteService.getDocenteById(this.idActualizar).subscribe((data: Docente) => {
      this.docenteActualizar = data; // Asigna los datos al formulario
    }, error => {
      console.error('Error al obtener el docente', error);
    });}


  onUpdateDocente() {
    this.docenteService.updateDocente(this.idActualizar, this.docenteActualizar).subscribe(
      (data: Docente) => {
        this.router.navigate(['/docente/view-docente']); // Asegúrate de que esta ruta sea correcta
      },
      (error: any) => {
        console.error('Error updating docente', error);
      }
    );
  }
}
