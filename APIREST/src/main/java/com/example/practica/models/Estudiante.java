package com.example.practica.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="alumno") // El nombre de la tabla en la base de datos
public class Estudiante {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name="nombre")
	private String nombre;

	@Column(name="fecha_nacimiento")
	private LocalDate fecha_nacimiento;

	@ManyToOne
	@JoinColumn(name = "docente_id") // El campo que relaciona al docente
	private Docente docente;

	// Relación Many-to-Many con Curso
	@ManyToMany(mappedBy = "estudiantes")
	@JsonBackReference // Evita la recursión infinita
	private List<Curso> cursos = new ArrayList<>();

	// Constructor vacío
	public Estudiante() {}

	// Constructor con parámetros
	public Estudiante(String nombre, LocalDate fecha_nacimiento) {
		this.nombre = nombre;
		this.fecha_nacimiento = fecha_nacimiento;
	}

	// Getters y Setters

	public Long getId() {return id;}
	public String getNombre() {return nombre;}
	public LocalDate getFechaNacimiento() {return fecha_nacimiento;}
	public List<Curso> getCursos() { return cursos;}

	public void setId(Long id) {this.id = id;}
	public void setNombre(String nombre) {this.nombre = nombre;}
	public void setFechaNacimiento(LocalDate fechaNacimiento) {this.fecha_nacimiento = fechaNacimiento;}
	public void setCursos(List<Curso> cursos) { this.cursos = cursos;}
}

/*
-------------------------------------
GET| localhost:8080/api/estudiantes
[
    {
        "id": 1,
        "nombre": "Santiago Ferrari",
        "fechaNacimiento": "1968-05-23"
    },
    {
        "id": 2,
        "nombre": "Sebastian Stefanelli",
        "fechaNacimiento": "2000-12-10"
    }
]
---------------------------------------
POST | localhost:8080/api/estudiantes
{
        "nombre": "Santiago Ferrari2",
        "fechaNacimiento": "1968-04-23"
}

----------------------------------------
PUT | localhost:8080/api/estudiantes/18
{
        "nombre": "Santiago Ferrari3",
        "fechaNacimiento": "1968-04-23"
}
----------------------------------------
DELETE |localhost:8080/api/estudiantes/18

out: ESTUDIANTE CON ID: 18ELIMINADO
-----------------------------------------
PATCH




*/