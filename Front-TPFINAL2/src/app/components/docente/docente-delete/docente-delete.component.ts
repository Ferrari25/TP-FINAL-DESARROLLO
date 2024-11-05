import {Component, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Tema} from "../../../models/tema.model";
import {DocenteService} from "../../../services/docente.service";
import {Docente} from "../../../models/docente.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-docente-delete',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './docente-delete.component.html',
  styleUrl: './docente-delete.component.css'
})
export class DocenteDeleteComponent implements OnInit{

  docente: Docente = new Docente(0, '', 0);
  idEliminar: any;
  docenteEliminar: Docente = new Docente(0, '', 0);

  constructor(private docenteService: DocenteService,private route: ActivatedRoute) {}

  ngOnInit() {
    // Captura el ID de la URL
    this.idEliminar = +this.route.snapshot.paramMap.get('id')!; // El signo de admiración indica que no será nulo

    // Cargar los datos del estudiante a modificar
    this.docenteService.getDocenteById(this.idEliminar).subscribe((data: Docente) => {
      this.docenteEliminar = data; // Asigna los datos al formulario
    }, error => {
      console.error('Error al obtener el docente', error);
    });}


  onDeleteDocente() {
    this.docenteService.deleteDocente(this.idEliminar).subscribe(() => {
      alert('Docente Eliminado exitosamente');
      this.docente = new Docente(0, '', 0); // Reset form
    });
  }
}
