import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Tema} from "../../../models/tema.model";
import {TemaService} from "../../../services/tema.service";
import {Estudiante} from "../../../models/estudiante.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-tema-update',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tema-update.component.html',
  styleUrl: './tema-update.component.css'
})
export class TemaUpdateComponent implements  OnInit{

  tema: Tema | undefined;
  temaActualizar: Tema = new Tema(0, '', '');
  public idActualizar: number | undefined;

  constructor(private temaService: TemaService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.idActualizar = +this.route.snapshot.paramMap.get('id')!;
    this.temaService.getTemaById(this.idActualizar).subscribe(
      (data: Tema) => {
        this.temaActualizar = data;
      },
      error => {
        console.error('Error al obtener el tema', error);
      }
    );
  }

  onUpdateTema() {
    this.temaService.updateTema(this.idActualizar, this.temaActualizar).subscribe(
      (data: Tema) => {
        alert('Tema actualizado exitosamente');
      },
      (error: any) => {
        console.error('Error actualizando tema', error);
      }
    );
  }

}
