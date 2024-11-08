import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Docente} from "../../../models/docente.model";
import {DocenteService} from "../../../services/docente.service";
import {Router} from "@angular/router";

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

  constructor(private docenteService: DocenteService, private router: Router) {
    this.docente = new Docente(0, '', 0); // Inicializar el objeto docente
  }

  onSubmit() {
    this.docenteService.saveDocente(this.docente).subscribe(() => {
      this.router.navigate(['/docente/view-docente']);
      this.docente = new Docente(0, '', 0); // Resetear el formulario
    });
  }
}
