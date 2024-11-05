import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {EstudianteListComponent} from "./components/estudiante/estudiante-list/estudiante-list.component";
import {DocenteListComponent} from "./components/docente/docente-list/docente-list.component";
import {TemasListComponent} from "./components/tema/temas-list/temas-list.component";
import {CursoListComponent} from "./components/curso/curso-list/curso-list.component";
import {TemaAddComponent} from "./components/tema/tema-add/tema-add.component";
import {TemaDeleteComponent} from "./components/tema/tema-delete/tema-delete.component";
import {TemaUpdateComponent} from "./components/tema/tema-update/tema-update.component";
import {TemaGetByIdComponent} from "./components/tema/tema-get-by-id/tema-get-by-id.component";
import {DatePipe, NgForOf} from "@angular/common";
import {DashboardComponent} from "./components/dashboard/dashboard.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EstudianteListComponent, DocenteListComponent, TemasListComponent, CursoListComponent, TemaAddComponent, TemaDeleteComponent, TemaUpdateComponent, TemaGetByIdComponent, RouterLink, DatePipe, NgForOf, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Front-TPFINAL2';
  protected readonly CursoListComponent = CursoListComponent;
}
