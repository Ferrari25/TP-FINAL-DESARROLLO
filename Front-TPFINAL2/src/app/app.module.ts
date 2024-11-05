import { CommonModule } from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";
import {EstudianteListComponent} from "./components/estudiante/estudiante-list/estudiante-list.component";
import {DocenteListComponent} from "./components/docente/docente-list/docente-list.component";
import {TemasListComponent} from "./components/tema/temas-list/temas-list.component";
import {CursoListComponent} from "./components/curso/curso-list/curso-list.component";
import {NgModule} from "@angular/core";
import {TemaAddComponent} from "./components/tema/tema-add/tema-add.component";
import {TemaDeleteComponent} from "./components/tema/tema-delete/tema-delete.component";
import {TemaUpdateComponent} from "./components/tema/tema-update/tema-update.component";
import {TemaGetByIdComponent} from "./components/tema/tema-get-by-id/tema-get-by-id.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {AppRoutingModule} from "./app.routes";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
    CommonModule,AppRoutingModule,
    EstudianteListComponent,
    DocenteListComponent,
    TemasListComponent,
    CursoListComponent,
    TemaAddComponent,
    TemaDeleteComponent,
    TemaUpdateComponent,
    TemaGetByIdComponent,
    TemaUpdateComponent,
    DashboardComponent,
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
