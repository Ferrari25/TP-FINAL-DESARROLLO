package com.example.practica.controllers;

import com.example.practica.models.Docente;
import com.example.practica.models.Estudiante;
import com.example.practica.services.DocenteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/api/docentes")
public class DocenteController {

    @Autowired
    private DocenteService docenteService;

    @GetMapping
    public List<Docente> getDocentes(){
        return this.docenteService.getAllDocentes();
    }

    @PostMapping
    public ResponseEntity<Docente> saveDocente(@RequestBody Docente docente){
        try
        {
            Docente savedDocente = this.docenteService.saveDocente(docente);
            return ResponseEntity.status(HttpStatus.CREATED).body(savedDocente);
        }
        catch (Exception e) {return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);}
    }

    @GetMapping(path="/{id}")
    public Optional<Docente> getDocenteById(@PathVariable( "id")Long id){
        return this.docenteService.getDocenteById(id);
    }

    @PutMapping(path="/{id}")
    public ResponseEntity<Docente> updateDocente(@PathVariable("id")Long id, @RequestBody Docente docente){
        Docente updateDocente = docenteService.updateById(docente,id);

        if(updateDocente != null)
        {
            System.out.println("DOCENTE ACTUALIZADO - CONTROLLER");
            return ResponseEntity.ok(updateDocente);
        }
        else{
            System.out.println("ERROR AL ACTUALIZAR DOCENTE - CONTROLLER");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @DeleteMapping(path="/{id}")
    public String deleteDocente(@PathVariable("id") Long id) {
        boolean ok= this.docenteService.deleteDocente(id);

        if (ok) {return "DOCENTE CON ID: " + id + "ELIMINADO - CONTROLLER";}
        else {return "ERROR AL ELMINAR DOCENTE ";}
    }

    @GetMapping("/{legajo}/estudiantes")
    public ResponseEntity<List<Estudiante>> getEstudiantesByDocenteLegajo(@PathVariable("legajo") Long legajo) {
        List<Estudiante> estudiantes = docenteService.getEstudianteByDocenteLegajo(legajo);
        if (estudiantes.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(estudiantes);
    }

    //localhost:8080/api/cursos/1001/estudiantes

}