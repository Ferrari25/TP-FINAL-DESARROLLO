package com.example.practica.controllers;

import java.util.ArrayList;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.*;
import com.example.practica.models.Estudiante;
import com.example.practica.services.EstudianteService;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;


@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/api/estudiantes")
public class EstudianteController {
	@Autowired
	private EstudianteService estudianteService;

	@GetMapping
	public ArrayList<Estudiante> getEstudiantes()
	{
		return this.estudianteService.getEstudiantes();
	}

	@PostMapping
	public ResponseEntity<Estudiante> saveStudent(@RequestBody Estudiante estudiante) {
		try {
			Estudiante savedEstudiante = estudianteService.saveStudent(estudiante);
			System.out.println("ESTUDIANTE GUARDADO: " + savedEstudiante);
			return ResponseEntity.status(HttpStatus.CREATED).body(savedEstudiante);
		} catch (Exception e) {
			System.out.println("ERROR AL GUARDAR ESTUDIANTE");
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body(null);
		}
	}

	@GetMapping(path="/{id}")
	public Optional<Estudiante> getEstudianteById(@PathVariable("id") Long id){
		return this.estudianteService.getEstudianteById(id);
	}

	@PutMapping(path="/{id}")
	public ResponseEntity<Estudiante> updateEstudiante(@PathVariable("id") Long id, @RequestBody Estudiante request) {
		Estudiante updatedEstudiante = estudianteService.updateEstudiante(request, id);

		if (updatedEstudiante != null) {
			System.out.println("ESTUDIANTE ACTUALIZADO");
			return ResponseEntity.ok(updatedEstudiante);
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
		}
	}

	@DeleteMapping(path="/{id}")
	public String deleteEstudiante(@PathVariable("id") Long id) {
		boolean ok= this.estudianteService.deleteEstudiante(id);
		
		if (ok) {
			return "ESTUDIANTE CON ID: " + id + "ELIMINADO";
		}else {return "ERROR AL ELIMINAR ESTUDIANTE CON ID: " + id;}
	}

	@GetMapping("/por-docente/{legajo}")
	public ResponseEntity<List<Estudiante>> getEstudiantesPorDocente(@PathVariable Long legajo) {
		List<Estudiante> estudiantes = estudianteService.findByDocenteLegajo(legajo);
		if (estudiantes.isEmpty()) {
			return ResponseEntity.noContent().build();
		} else {
			return ResponseEntity.ok(estudiantes);
		}
	}

} 
