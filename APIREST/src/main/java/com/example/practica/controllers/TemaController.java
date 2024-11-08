package com.example.practica.controllers;

import com.example.practica.models.Tema;
import com.example.practica.services.TemaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/api/tema")
public class TemaController {


    @Autowired
    private TemaService temaService;

    @GetMapping
    public ArrayList<Tema> getTema() {
        return this.temaService.getAllTemas();
    }


    @PostMapping
    public ResponseEntity<Tema> saveTema(@RequestBody Tema tema){
        try
        {
            Tema savedTema = this.temaService.saveTema(tema);
            return ResponseEntity.status(HttpStatus.CREATED).body(savedTema);

        }
        catch (Exception e) {return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);}
    }


    @GetMapping(path="/{id}")
    public Optional<Tema> getTemaById(@PathVariable( "id")Long id){
        return this.temaService.getById(id);
    }


    @PutMapping(path="/{id}")
    public ResponseEntity<Tema> updateTema(@PathVariable("id")Long id, @RequestBody Tema tema){
        try {
            Tema updatedTema = temaService.updateTema(tema,id);
            return ResponseEntity.ok(updatedTema);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    @DeleteMapping(path="/{id}")
    public ResponseEntity<String> deleteTema(@PathVariable("id") Long id) {
        if (temaService.deleteTema(id)) {
            return ResponseEntity.ok("TEMA WITH ID " + id + " DELETED");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("ERROR DELETING TEMA");
        }
    }

}