package com.example.practica.services;

import java.util.ArrayList;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.practica.models.Estudiante;
import com.example.practica.repositories.IEstudianteRepository;

@Service
public class EstudianteService {

	@Autowired
	IEstudianteRepository studentRepository;
	
	public ArrayList<Estudiante> getEstudiantes(){return (ArrayList<Estudiante>) studentRepository.findAll();}

	public Estudiante saveStudent(Estudiante student) {
		try {
			return studentRepository.save(student);
		} catch (Exception e) {
			System.err.println("Error saving student: " + e.getMessage());
			throw new RuntimeException("Error saving student: " + e.getMessage());
		}
	}

	public Optional<Estudiante> getEstudianteById(Long id){
		return studentRepository.findById(id);
	}

	public Estudiante updateEstudiante(Estudiante request, Long id) {
		Estudiante student = studentRepository.findById(id).orElseThrow(() -> new RuntimeException("Student not found"));

		student.setNombre(request.getNombre());
		student.setFechaNacimiento(request.getFechaNacimiento());

		return studentRepository.save(student);
	}

	public Boolean deleteEstudiante(Long id) {
		
		try { 
			studentRepository.deleteById(id);
			return true;
		}
		catch (Exception e) { 
			return false;
		}
		}

	public List<Estudiante> findByDocenteLegajo(Long legajo) {
		return studentRepository.findByDocenteLegajo(legajo); // Asume que tienes un metodo en el repositorio
	}
}
	
	