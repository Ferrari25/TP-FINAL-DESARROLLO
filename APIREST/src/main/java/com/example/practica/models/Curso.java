package com.example.practica.models;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="curso")
public class Curso {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "tema_id")
    private Tema tema;

    @Column(name = "fecha_inicio")
    private LocalDate fechaInicio;

    @Column(name = "fecha_fin")
    private LocalDate fechaFin;

    @ManyToOne
    @JoinColumn(name = "docente_id")
    private Docente docente;

    @Column(name = "precio")
    private Double precio;

    @ManyToMany(cascade = CascadeType.PERSIST)
    @JoinTable(
            name = "curso_alumno",
            joinColumns = @JoinColumn(name = "curso_id"),
            inverseJoinColumns = @JoinColumn(name = "alumno_id")
    )

    private List<Estudiante> estudiantes = new ArrayList<>();

    public Curso() {}

    public Curso(Tema tema, LocalDate fechaInicio, LocalDate fechaFin, Docente docente, Double precio) {
        this.tema = tema;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.docente = docente;
        this.precio = precio;
    }

    // Getters y Setters

    public Long getId() { return id; }
    public Tema getTema() { return tema; }
    public LocalDate getFechaInicio() { return fechaInicio; }
    public LocalDate getFechaFin() { return fechaFin; }
    public Docente getDocente() { return docente; }
    public Double getPrecio() { return precio; }
    public List<Estudiante> getEstudiantes() { return estudiantes; }

    public void setId(Long id) { this.id = id; }
    public void setTema(Tema tema) { this.tema = tema; }
    public void setFechaInicio(LocalDate fechaInicio) { this.fechaInicio = fechaInicio; }
    public void setFechaFin(LocalDate fechaFin) { this.fechaFin = fechaFin; }
    public void setDocente(Docente docente) { this.docente = docente; }
    public void setPrecio(Double precio) { this.precio = precio; }
    public void setEstudiantes(List<Estudiante> estudiantes) { this.estudiantes = estudiantes; }

}

/*EN EL POSTMAN PARA HACER UN

 GET | localhost:8080/api/cursos

OUT:
{
        "id": 2,
        "tema": {
            "id": 2,
            "nombre": "Desarrolloo de software",
            "descripcion": "Metodologías ágiles y tradicionales para el desarrollo de aplicaciones."
        },
        "fechaInicio": "2023-02-10",
        "fechaFin": "2023-12-15",
        "docente": {
            "nombre": "Guillermo Cherencio",
            "legajo": 1002,
            "id": 2
        },
        "precio": 3000.0,
        "estudiantes": [
            {
                "id": 4,
                "nombre": "Ignacio Ancherama",
                "fechaNacimiento": "2001-09-07"
            },
            {
                "id": 5,
                "nombre": "Micaela Herrera",
                "fechaNacimiento": "1999-07-29"
            }
         ]
}
-------------------------------------------------------------
POST | localhost:8080/api/cursos

DE ESTA MANERA NO ME AGREGA LOS ESTUDIANTES PERO LO DEMAS LO CARGA PERFECTO
(MANERA DE USAR)
{
        "tema": {
            "id": 2,
            "nombre": "Desarrolloo de software curso",
            "descripcion": "Metodologías ágiles y tradicionales para el desarrollo de aplicaciones."
        },
        "fechaInicio": "2023-03-11",
        "fechaFin": "2023-04-12",
        "docente": {
            "nombre": "Guillermo Cherencio",
            "legajo": 1002,
            "id": 2
        },
        "precio": 3001.0,
        "estudiantes": [
            {
                "id": 4,
                "nombre": "Ignacio Ancherama",
                "fechaNacimiento": "2001-09-07"
            },
            {
                "id": 5,
                "nombre": "Micaela Herrera",
                "fechaNacimiento": "1999-07-29"
            }
         ]
}
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



---------------------------------------------------------------
PUT | localhost:8080/api/cursos/
(MANERA DE USAR)
{
        "tema": {
            "id": 2,
            "nombre": "Desarrolloo de software",
            "descripcion": "Metodologías ágiles y tradicionales para el desarrollo de aplicaciones."
        },
        "fechaInicio": "2010-11-30",
        "fechaFin": "2020-11-30",
        "docente": {
            "nombre": "Guillermo Cherencio",
            "legajo": 1002,
            "id": 2
        },
        "precio": 3000.0,
        "estudiantes": []
}
----------------------------------------------------------------
DELETE |localhost:8080/api/cursos/8

OUT: true
*/
