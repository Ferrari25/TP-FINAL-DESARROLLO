import { Component, OnInit } from '@angular/core';
import { Docente } from "../../../models/docente.model";
import { DocenteService } from "../../../services/docente.service";
import {CommonModule, NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-docente-list',
  templateUrl: './docente-list.component.html',
  styleUrls: ['./docente-list.component.css'],
  imports: [
    NgForOf,
    RouterLink
  ],
  standalone: true
})
export class DocenteListComponent implements OnInit {

  docentes: Docente[] = [];

  constructor(private docenteService: DocenteService) { }

  ngOnInit(): void {
    this.docenteService.getDocentesAll().subscribe(
      response => {
        this.docentes = response; // Asigna la respuesta a la variable
        console.log(this.docentes); // Verifica si la lista se está llenando
      },
      error => {
        console.error('Error al obtener docentes', error);
      }
    );
  }
}
