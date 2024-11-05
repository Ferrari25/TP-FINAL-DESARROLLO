package com.example.practica.services;

import com.example.practica.models.Tema;
import com.example.practica.repositories.ITemaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class TemaService {
    @Autowired
    ITemaRepository temaRepository;

    public ArrayList<Tema> getAllTemas(){return (ArrayList<Tema>) temaRepository.findAll();}

    public Tema saveTema(Tema tema) {return temaRepository.save(tema);}

    public Optional<Tema> getById(Long id) {
        Optional<Tema> tema = temaRepository.findById(id);
        System.out.println("Tema recuperado: " + tema);
        return temaRepository.findById(id);
    }

    public Tema updateTema(Tema request, Long id) {
        Tema tema = temaRepository.findById(id).orElseThrow(() -> new RuntimeException("tema no encontrado"));
        tema.setNombre(request.getNombre());
        tema.setDescripcion(request.getDescripcion());
        return temaRepository.save(tema);
    }

    public Boolean deleteTema(Long id) {
        try {
            temaRepository.deleteById(id);
            return true;
        }
        catch (Exception e) {return false;}
    }

}