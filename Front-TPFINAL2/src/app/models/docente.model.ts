export class Docente {
  id: number;
  nombre: string;
  legajo: number;

  constructor(id: number, nombre: string, legajo: number) {
    this.id = id;
    this.nombre = nombre;
    this.legajo = legajo;
  }
}
