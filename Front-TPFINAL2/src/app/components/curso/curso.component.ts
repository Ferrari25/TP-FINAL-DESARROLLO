import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {CursoListComponent} from "./curso-list/curso-list.component";

@Component({
  selector: 'app-curso',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    CursoListComponent
  ],
  templateUrl: './curso.component.html',
  styleUrl: './curso.component.css'
})
export class CursoComponent {

}
