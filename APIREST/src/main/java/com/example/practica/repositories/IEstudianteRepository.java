package com.example.practica.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.practica.models.Estudiante;

import java.util.List;

public interface IEstudianteRepository extends JpaRepository<Estudiante,Long>{
    List<Estudiante> findByDocenteLegajo(Long legajo);
}
