import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Docente} from "../../../models/docente.model";
import {DocenteService} from "../../../services/docente.service";

@Component({
  selector: 'app-docente-add',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './docente-add.component.html',
  styleUrl: './docente-add.component.css'
})
export class DocenteAddComponent {
  docente: Docente;

  constructor(private docenteService: DocenteService) {
    this.docente = new Docente(0, '', 0); // Inicializar el objeto docente
  }

  onSubmit() {
    this.docenteService.saveDocente(this.docente).subscribe(() => {
      alert('Docente agregado exitosamente');
      this.docente = new Docente(0, '', 0); // Resetear el formulario
    });
  }
}
