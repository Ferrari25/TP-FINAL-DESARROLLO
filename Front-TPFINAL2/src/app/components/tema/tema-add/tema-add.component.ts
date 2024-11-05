import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Tema} from "../../../models/tema.model";
import {TemaService} from "../../../services/tema.service";

@Component({
  selector: 'app-tema-add',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './tema-add.component.html',
  styleUrl: './tema-add.component.css'
})
export class TemaAddComponent {
  tema: Tema = new Tema(0, '', '');

  constructor(private temaService: TemaService) {}

  onSubmit() {
    this.temaService.saveTema(this.tema).subscribe(() => {
      alert('Tema agregado exitosamente');
      this.tema = new Tema(0, '', '');
    });
  }
}
