import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemaService } from '../../../services/tema.service';
import { Tema } from '../../../models/tema.model';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-tema-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './temas-list.component.html',
  styleUrls: ['./temas-list.component.css']
})
export class TemasListComponent implements OnInit {
  temas: Tema[] = [];

  constructor(private temaService: TemaService) {}

  ngOnInit(): void {
    this.temaService.getTemasAll().subscribe(
      (response) => {
        this.temas = response; // Asigna la respuesta a la variable
        console.log(this.temas); // Verifica si la lista se está llenando
      },
      (error) => {
        console.error('Error al obtener temas', error);
      }
    );
  }
}
