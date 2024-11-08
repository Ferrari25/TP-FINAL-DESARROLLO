package com.example.practica.services;

import com.example.practica.models.Curso;
import com.example.practica.models.Docente;
import com.example.practica.models.Estudiante;
import com.example.practica.models.Tema;
import com.example.practica.repositories.ICursoRepository;
import com.example.practica.repositories.IDocenteRepository;
import com.example.practica.repositories.IEstudianteRepository;
import com.example.practica.repositories.ITemaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CursoService {

    @Autowired
    ICursoRepository cursoRepository;
    @Autowired
    private IDocenteRepository docenteRepository;

    @Autowired
    private ITemaRepository temaRepository;

    @Autowired
    private IEstudianteRepository estudianteRepository;

    public ArrayList<Curso> getAllCursos(){return (ArrayList<Curso>) cursoRepository.findAll();}

    public Optional<Curso> getById(Long id) {return cursoRepository.findById(id);}

    public List<Curso> getCursosByDate(LocalDate fechaFin) {return cursoRepository.findByFechaFin(fechaFin);}

    public Curso saveCurso(Curso curso) {
        try {
            Docente existingDocente = docenteRepository.findById(curso.getDocente().getId())
                    .orElseThrow(() -> new RuntimeException("Docente not found"));
            curso.setDocente(existingDocente);
            //------------------------

            Tema existingTema = temaRepository.findById(curso.getTema().getId())
                    .orElseThrow(() -> new RuntimeException("Tema not found"));
            curso.setTema(existingTema);
            //-------------------------

            List<Estudiante> existingAlumnos = new ArrayList<>();
            for (Estudiante alumno : curso.getEstudiantes()) {
                Estudiante existingAlumno = estudianteRepository.findById(alumno.getId())
                        .orElseThrow(() -> new RuntimeException("Alumno not found with ID: " + alumno.getId()));
                existingAlumnos.add(existingAlumno);
            }
            curso.setEstudiantes(existingAlumnos);
            //--------------------------

            return cursoRepository.save(curso);
        } catch (Exception e) {
            System.err.println("Error saving curso: " + e.getMessage());
            throw new RuntimeException("Error saving curso: " + e.getMessage());
        }
    }

    public Curso updateById(Curso request, Long id) {
        Curso curso = cursoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Curso not found"));

        Docente existingDocente = docenteRepository.findById(request.getDocente().getId())
                .orElseThrow(() -> new RuntimeException("Docente not found"));

        Tema existingTema = temaRepository.findById(request.getTema().getId())
                .orElseThrow(() -> new RuntimeException("Tema not found"));

        List<Estudiante> existingEstudiantes = new ArrayList<>();
        for (Estudiante alumno : request.getEstudiantes()) {
            Estudiante existingEstudiante = estudianteRepository.findById(alumno.getId())
                    .orElseThrow(() -> new RuntimeException("Alumno not found with ID: " + alumno.getId()));
            existingEstudiantes.add(existingEstudiante);
        }

        curso.setDocente(existingDocente);
        curso.setTema(existingTema);
        curso.setEstudiantes(existingEstudiantes);
        curso.setFechaInicio(request.getFechaInicio());
        curso.setFechaFin(request.getFechaFin());
        curso.setPrecio(request.getPrecio());

        return cursoRepository.save(curso);
    }

    public Boolean deleteCurso(Long id) {
        try {
            cursoRepository.deleteById(id);
            return true;
        } catch (Exception e) {return false;}
    }


}