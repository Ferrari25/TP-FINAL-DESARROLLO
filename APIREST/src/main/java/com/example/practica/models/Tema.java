package com.example.practica.models;

import jakarta.persistence.*;

@Entity
@Table(name="tema")
public class Tema {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "descripcion")
    private String descripcion;

    public Tema() {}

    public Tema(String nombre, String descripcion) {
        this.nombre = nombre;
        this.descripcion = descripcion;
    }

    public long getId() { return id; }
    public String getDescripcion() { return descripcion; }
    public String getNombre() { return nombre; }

    public void setId(long id) { this.id = id; }
    public void setNombre(String nombre) { this.nombre = nombre; }
    public void setDescripcion(String descripcion){ this.descripcion = descripcion; }

}

/*

GET | localhost:8080/api/tema

[
    {
        "id": 1,
        "nombre": "Diseño de Sistema",
        "descripcion": "Introducción al diseño estructurado y orientado a objetos de sistemas."
    },
    {
        "id": 2,
        "nombre": "Desarrolloo de software",
        "descripcion": "Metodologías ágiles y tradicionales para el desarrollo de aplicaciones."
    }
]
----------------------------------
POST | localhost:8080/api/tema

{
        "nombre": "nuevo tema",
        "descripcion": "nuevo tema agregado"
}
----------------------------------
PUT | localhost:8080/api/tema/15

{
        "nombre": "nuevo tema actualizado",
        "descripcion": "nuevo tema agregado"
}

---------------------------------------
DELETE | localhost:8080/api/tema/3



*/
