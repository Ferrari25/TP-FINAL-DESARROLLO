package com.example.practica.services;

import com.example.practica.models.Curso;
import com.example.practica.models.Docente;
import com.example.practica.models.Estudiante;
import com.example.practica.repositories.ICursoRepository;
import com.example.practica.repositories.IDocenteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class DocenteService {

    @Autowired
    IDocenteRepository docenteRepository;

    @Autowired
    ICursoRepository cursoRepository;

    public List<Docente> getAllDocentes() {return docenteRepository.findAll();}

    public Docente saveDocente(Docente docente) {return docenteRepository.save(docente);}

    public Optional<Docente> getDocenteById(Long id) {
        return docenteRepository.findById(id);
    }

    // Actualizar un docente por ID
    public Docente updateById(Docente request, Long id) {
        Docente docente = docenteRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Docente no encontrado"));
        docente.setNombre(request.getNombre());
        docente.setLegajo(request.getLegajo());
        return docenteRepository.save(docente);
    }

    // Eliminar un docente por ID
    public Boolean deleteDocente(Long id) {
        try {
            docenteRepository.deleteById(id);
            return true;
        } catch (Exception e) {return false;}
    }

    public List<Estudiante> getEstudianteByDocenteLegajo(Long legajo) {
        Optional<Docente> docente = docenteRepository.findByLegajo(Math.toIntExact(legajo));
        if (docente.isPresent()) {
            List<Curso> cursos = cursoRepository.findByDocente(docente.get());
            List<Estudiante> estudiantes = new ArrayList<>();
            for (Curso curso : cursos) {
                estudiantes.addAll(curso.getEstudiantes());
            }
            return estudiantes;
        } else {
            return new ArrayList<>();
        }
    }
}
