package com.example.practica.services;

import com.example.practica.models.Docente;
import com.example.practica.models.Estudiante;
import com.example.practica.repositories.IDocenteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class DocenteService {

    @Autowired
    IDocenteRepository docenteRepository;

    public ArrayList<Docente> getAllDocentes() {return (ArrayList<Docente>) docenteRepository.findAll();}

    public Docente saveDocente(Docente docente) {return docenteRepository.save(docente);}

    public Optional<Docente> getById(Long id) {
        return docenteRepository.findById(id);
    }

    // Actualizar un docente por ID
    public Docente updateById(Docente request, Long id) {
        Docente docente = docenteRepository.findById(id).orElseThrow(() -> new RuntimeException("Docente no encontrado"));
        docente.setNombre(request.getNombre());
        docente.setLegajo(request.getLegajo());
        return docenteRepository.save(docente);
    }

    // Eliminar un docente por ID
    public Boolean deleteDocente(Long id) {
        try {
            docenteRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

}
