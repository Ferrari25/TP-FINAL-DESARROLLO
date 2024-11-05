package com.example.practica.repositories;

import com.example.practica.models.Curso;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

@Repository
public interface ICursoRepository extends JpaRepository<Curso,Long> {

    List<Curso> findByFechaFin(LocalDate fechaFin);
}
