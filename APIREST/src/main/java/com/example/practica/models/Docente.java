package com.example.practica.models;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "docente")
public class Docente {
    @jakarta.persistence.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Column(name="nombre")
    private String nombre;

    @Column(name = "legajo")
    private Integer legajo;

    public Docente() {}

    public Docente(String nombre, Integer legajo) {
        this.nombre = nombre;
        this.legajo = legajo;

    }

    public Long getId() {return Id;}
    public String getNombre() {return nombre;}
    public Integer getLegajo() {return legajo;}

    public void setId(Long id) {this.Id = id;}
    public void setNombre(String nombre) {this.nombre = nombre;}
    public void setLegajo(Integer legajo) {this.legajo = legajo;}


}

/*

GET | localhost:8080/api/docentes

[
    {
        "nombre": "Sergio Viera",
        "legajo": 1111,
        "id": 1
    },
    {
        "nombre": "Guillermo Cherencio",
        "legajo": 1002,
        "id": 2
    }
]
----------------------------------
POST | localhost:8080/api/docentes

{
        "nombre": "Santiago Profesor",
        "legajo": 1132
}
----------------------------------
PUT | localhost:8080/api/docentes/11

{
        "nombre": "Santiago Profesor actualizado",
        "legajo": 1132
}

---------------------------------------
DELETE | localhost:8080/api/docentes/11

DOCENTE CON ID: 11 ELIMINADO - CONTROLLER


*/