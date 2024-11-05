import {Component, OnInit} from '@angular/core';
import {Tema} from "../../../models/tema.model";
import {TemaService} from "../../../services/tema.service";
import {FormsModule} from "@angular/forms";
import {Estudiante} from "../../../models/estudiante.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-tema-delete',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './tema-delete.component.html',
  styleUrl: './tema-delete.component.css'
})
export class TemaDeleteComponent implements OnInit{
  tema: Tema = new Tema(0, '', '');
  idEliminar: any;
  temaEliminar: Tema = new Tema(0, '', '' );

  constructor(private temaService: TemaService,private route: ActivatedRoute) {}

  ngOnInit() {
    // Captura el ID de la URL
    this.idEliminar = +this.route.snapshot.paramMap.get('id')!; // El signo de admiración indica que no será nulo

    // Cargar los datos del estudiante a modificar
    this.temaService.getTemaById(this.idEliminar).subscribe((data: Tema) => {
      this.temaEliminar = data; // Asigna los datos al formulario
    }, error => {
      console.error('Error al obtener el estudiante', error);
    });}


  onDeleteTema() {
    this.temaService.deleteTema(this.idEliminar).subscribe(() => {
      alert('Tema Eliminado exitosamente');
      this.tema = new Tema(0, '', ''); // Reset form
    });
  }

}
