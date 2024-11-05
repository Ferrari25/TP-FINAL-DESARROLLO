import {Tema} from "./tema.model";
import {Docente} from "./docente.model";
import {Estudiante} from "./estudiante.model";


export class Curso {
  id: number;
  tema: Tema;
  fechaInicio: Date;
  fechaFin: Date;
  docente:Docente;
  precio: number;
  estudiantes: Estudiante[];

  constructor(
    id: number,
    tema: { id: number; nombre: string; descripcion: string },
    fechaInicio: Date,
    fechaFin: Date,
    docente: { id: number; nombre: string; legajo: number },
    precio: number,
    estudiantes: { id: number; nombre: string;fechaNacimiento:Date; }[]
  ) {
    this.id = id;
    this.tema = tema;
    this.fechaInicio = fechaInicio;
    this.fechaFin = fechaFin;
    this.docente = docente;
    this.precio = precio;
    this.estudiantes = estudiantes;
  }
}
