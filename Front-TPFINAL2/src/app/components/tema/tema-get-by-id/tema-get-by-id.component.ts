import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {TemaService} from "../../../services/tema.service";
import {Tema} from "../../../models/tema.model";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-tema-get-by-id',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './tema-get-by-id.component.html',
  styleUrl: './tema-get-by-id.component.css'
})
export class TemaGetByIdComponent {
  idBuscar: number | undefined;
  tema: Tema = new Tema(0, '', '');
  constructor(private temaService: TemaService) {}

  onGetTemaById() {
    this.temaService.getTemaById(this.idBuscar).subscribe((data: Tema) => {
      this.tema = data;
    }, (error) => {
      console.error('Error fetching tema by id', error);
    });
  }
}
