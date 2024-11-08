package com.example.practica.repositories;

import com.example.practica.models.Curso;
import com.example.practica.models.Docente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface ICursoRepository extends JpaRepository<Curso,Long> {
    List<Curso> findByFechaFin(LocalDate fechaFin);
    Optional<Curso> findByDocenteIdAndFechaFinAfter(Long docenteId, LocalDate currentDate);
    List<Curso> findByDocente(Docente docente);
}
