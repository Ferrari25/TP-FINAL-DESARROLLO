select * from alumno; 
select * from docente; 
select * from tema; 
select * from curso; 

select * from curso_alumno; where curso_id= 1;

/*1. Obtener todos los detalles de los cursos con su tema, docente, y alumnos inscritos*/
SELECT 
    c.id AS curso_id,
    t.nombre AS tema_nombre,
    d.nombre AS docente_nombre,
    a.nombre AS alumno_nombre,
    c.fecha_inicio,
    c.fecha_fin,
    c.precio
FROM 
    curso c
JOIN 
    tema t ON c.tema_id = t.id
JOIN 
    docente d ON c.docente_id = d.id
JOIN 
    curso_alumno ca ON c.id = ca.curso_id
JOIN 
    alumno a ON ca.alumno_id = a.id;
--------------------------------------
/*2. Obtener todos los cursos con su tema, docente, pero sin incluir alumnos*/
SELECT 
    c.id AS curso_id,
    t.nombre AS tema_nombre,
    d.nombre AS docente_nombre,
    c.fecha_inicio,
    c.fecha_fin,
    c.precio
FROM 
    curso c
JOIN 
    tema t ON c.tema_id = t.id
JOIN 
    docente d ON c.docente_id = d.id;
--------------------------------------
/*3. Obtener los detalles de un curso específico, incluyendo los alumnos inscritos
Para un curso específico (por ejemplo, el curso con curso_id = 1):*/

SELECT 
    c.id AS curso_id,
    t.nombre AS tema_nombre,
    d.nombre AS docente_nombre,
    a.nombre AS alumno_nombre,
    c.fecha_inicio,
    c.fecha_fin,
    c.precio
FROM 
    curso c
JOIN 
    tema t ON c.tema_id = t.id
JOIN 
    docente d ON c.docente_id = d.id
JOIN 
    curso_alumno ca ON c.id = ca.curso_id
JOIN 
    alumno a ON ca.alumno_id = a.id
WHERE 
    c.id = 1;
----------------------------------------
/*4. Obtener la lista de todos los alumnos y los cursos en los que están inscritos*/
SELECT 
    a.nombre AS alumno_nombre,
    c.id AS curso_id,
    t.nombre AS tema_nombre,
    d.nombre AS docente_nombre,
    c.fecha_inicio,
    c.fecha_fin
FROM 
    alumno a
JOIN 
    curso_alumno ca ON a.id = ca.alumno_id
JOIN 
    curso c ON ca.curso_id = c.id
JOIN 
    tema t ON c.tema_id = t.id
JOIN 
    docente d ON c.docente_id = d.id;
------------------------------------------
/*5. Obtener la cantidad de alumnos inscritos en cada curso*/
SELECT 
    c.id AS curso_id,
    t.nombre AS tema_nombre,
    d.nombre AS docente_nombre,
    COUNT(ca.alumno_id) AS total_alumnos,
    c.fecha_inicio,
    c.fecha_fin
FROM 
    curso c
JOIN 
    tema t ON c.tema_id = t.id
JOIN 
    docente d ON c.docente_id = d.id
LEFT JOIN 
    curso_alumno ca ON c.id = ca.curso_id
GROUP BY 
    c.id, t.nombre, d.nombre, c.fecha_inicio, c.fecha_fin;
---------------------------------------------------------------------
/* 6. Obtener los detalles de los docentes y los cursos que imparten */
SELECT 
    d.nombre AS docente_nombre,
    c.id AS curso_id,
    t.nombre AS tema_nombre,
    c.fecha_inicio,
    c.fecha_fin,
    c.precio
FROM 
    docente d
JOIN 
    curso c ON d.id = c.docente_id
JOIN 
    tema t ON c.tema_id = t.id;
-------------------------------------------------------