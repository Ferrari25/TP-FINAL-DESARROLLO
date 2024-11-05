package com.example.practica.controllers;

import com.example.practica.models.Curso;
import com.example.practica.services.CursoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/api/cursos")
public class CursoController {

    @Autowired
    CursoService cursoService;

    @GetMapping
    public ArrayList<Curso> getAllCursos(){

        return cursoService.getAllCursos();
    }

    @PostMapping
    public ResponseEntity<Curso> saveCurso(@RequestBody Curso curso) {
        try {
            Curso savedCurso = cursoService.saveCurso(curso);
            return ResponseEntity.status(HttpStatus.CREATED).body(savedCurso);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Curso> getById(@PathVariable Long id) {
        Optional<Curso> curso = cursoService.getById(id);
        if (curso.isPresent()) {
            return ResponseEntity.ok(curso.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Curso> updateCurso(@RequestBody Curso curso, @PathVariable Long id) {
        try {
            Curso updatedCurso = cursoService.updateById(curso, id);
            return ResponseEntity.ok(updatedCurso);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> deleteCurso(@PathVariable Long id) {
        boolean deleted = cursoService.deleteCurso(id);
        if (deleted) {
            System.out.println("CURSO CON ID: "+id+" ELIMINADO ");
            return ResponseEntity.ok(true);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/buscar-por-fecha")
    public ResponseEntity<List<Curso>> getCursosByFecha(@RequestParam("fecha") String fecha) {
        LocalDate fechaFin = LocalDate.parse(fecha);
        List<Curso> cursos = cursoService.getCursosByDate(fechaFin);

        if (cursos.isEmpty()) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(cursos);
        }
    }
}
