import {NgModule} from "@angular/core";
import {RouterModule, Routes} from '@angular/router';
import {TemaUpdateComponent} from "./components/tema/tema-update/tema-update.component";
import {TemaDeleteComponent} from "./components/tema/tema-delete/tema-delete.component";
import {TemaAddComponent} from "./components/tema/tema-add/tema-add.component";
import {TemasListComponent} from "./components/tema/temas-list/temas-list.component";
import {EstudianteListComponent} from "./components/estudiante/estudiante-list/estudiante-list.component";
import {DocenteListComponent} from "./components/docente/docente-list/docente-list.component";
import {CursoListComponent} from "./components/curso/curso-list/curso-list.component";
import {CursoDeleteComponent} from "./components/curso/curso-delete/curso-delete.component";
import {CursoUpdateComponent} from "./components/curso/curso-update/curso-update.component";
import {CursoAddComponent} from "./components/curso/curso-add/curso-add.component";
import {EstudianteUpdateComponent} from "./components/estudiante/estudiante-update/estudiante-update.component";
import {EstudianteAddComponent} from "./components/estudiante/estudiante-add/estudiante-add.component";
import {EstudianteDeleteComponent} from "./components/estudiante/estudiante-delete/estudiante-delete.component";
import {DocenteDeleteComponent} from "./components/docente/docente-delete/docente-delete.component";
import {DocenteUpdateComponent} from "./components/docente/docente-update/docente-update.component";
import {DocenteComponent} from "./components/docente/docente.component";
import {DocenteAddComponent} from "./components/docente/docente-add/docente-add.component";
import {EstudianteComponent} from "./components/estudiante/estudiante.component";
import {TemaComponent} from "./components/tema/tema.component";
import {CursoComponent} from "./components/curso/curso.component";
import {CursoDateComponent} from "./components/curso/curso-date/curso-date.component";
import {EstudiantePorLegajoComponent} from "./components/docente/estudiante-por-legajo/estudiante-por-legajo.component";
import {InicioComponent} from "./components/inicio/inicio.component";



export const routes: Routes = [

  //ESTUDIANTES
  { path: 'update-estudiante/:id', component: EstudianteUpdateComponent },
  { path: 'delete-estudiante/:id', component: EstudianteDeleteComponent },

  ///DOCENTES
  { path: 'update-docente/:id', component: DocenteUpdateComponent },
  { path: 'delete-docente/:id', component: DocenteDeleteComponent },

  //TEMA
  { path: 'update-tema/:id', component: TemaUpdateComponent },
  { path: 'delete-tema/:id', component: TemaDeleteComponent },

  //CURSOS
  { path: 'update-curso/:id', component: CursoUpdateComponent },
  { path: 'delete-curso/:id', component: CursoDeleteComponent },

  //INICIO
  { path: 'inicio', component: InicioComponent },



  // Ruta para el Dashboard de Docente
  {
    path: 'docente',
    component: DocenteComponent,
    children: [
      { path: 'add-docente', component: DocenteAddComponent },
      { path: 'update-docente', component: DocenteUpdateComponent },
      { path: 'delete-docente', component: DocenteDeleteComponent },
      { path: 'view-docente', component: DocenteListComponent },
      { path: 'estudiantes-por-legajo', component: EstudiantePorLegajoComponent },
    ]
  },

  // Ruta para el Dashboard de Estudiante
  {
    path: 'estudiante',
    component: EstudianteComponent,
    children: [
      { path: 'add-estudiante', component: EstudianteAddComponent },
      { path: 'update-estudiante', component: EstudianteUpdateComponent },
      { path: 'delete-estudiante', component: EstudianteDeleteComponent },
      { path: 'view-estudiante', component: EstudianteListComponent }
    ]
  },

  {
    path: 'tema',
    component: TemaComponent,
    children: [
      { path: 'add-tema', component: TemaAddComponent },
      { path: 'update-tema', component: TemaUpdateComponent },
      { path: 'delete-tema', component: TemaDeleteComponent },
      { path: 'view-tema', component: TemasListComponent },
    ]
  },

  {
    path: 'curso',
    component: CursoComponent,
    children: [
      { path: 'add-curso', component: CursoAddComponent },
      { path: 'curso-by-date', component: CursoDateComponent },
      { path: 'update-curso', component: CursoUpdateComponent },
      { path: 'delete-curso', component: CursoDeleteComponent },
      { path: 'view-curso', component: CursoListComponent },
    ]
  },

  { path: '', redirectTo: '/curso', pathMatch: 'full' } // Ruta por defecto
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
