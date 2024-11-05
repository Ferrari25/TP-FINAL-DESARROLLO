--INSERTAR DATOS

INSERT INTO alumno (nombre, fecha_nacimiento) VALUES
('Santiago Ferrari', '1998-05-23'),
('Sebastian Stefanelli', '2000-12-10'),
('Milagros Trotta', '1996-04-18'),
('Ignacio Ancherama', '2001-09-07'),
('Micaela Herrera', '1999-07-29'),
('Valentina Carcamos', '1997-03-15'),
('Macarena Passano', '2000-02-25'),
('Julian Vazquez', '1995-11-30'),
('Lucas Delgado', '2003-06-11'),
('Nicolas Angerossa', '2004-08-19');

INSERT INTO docente (nombre, legajo) VALUES
('Sergio Viera', 1001),
('Guillermo Cherencio', 1002),
('Valeria Dominguez', 1003),
('German Bresmaciano', 1004),
('Mercedes Sosa', 1005),
('Juan Romero', 1006);

INSERT INTO tema (nombre, descripcion) VALUES
('Diseño de sistemas', 'Introducción al diseño estructurado y orientado a objetos de sistemas.'),
('Desarrollo de software', 'Metodologías ágiles y tradicionales para el desarrollo de aplicaciones.'),
('Inglés', 'Curso básico e intermedio de comprensión y redacción en inglés.'),
('Análisis Matemático', 'Teoría y aplicaciones del cálculo diferencial e integral.'),
('Algoritmos', 'Fundamentos de algoritmos y estructuras de datos.'),
('Sistemas Operativos', 'Estudio de los sistemas operativos y su funcionamiento interno.'),
('Bases de Datos', 'Modelado, diseño y administración de bases de datos relacionales.');

INSERT INTO tema (id, nombre, descripcion) VALUES
(1, 'Diseño de sistemas', 'Introducción al diseño estructurado y orientado a objetos de sistemas.'),
(2, 'Desarrollo de software', 'Metodologías ágiles y tradicionales para el desarrollo de aplicaciones.'),
(3, 'Inglés', 'Curso básico e intermedio de comprensión y redacción en inglés.'),
(4, 'Análisis Matemático', 'Teoría y aplicaciones del cálculo diferencial e integral.'),
(5, 'Algoritmos', 'Fundamentos de algoritmos y estructuras de datos.'),
(6, 'Sistemas Operativos', 'Estudio de los sistemas operativos y su funcionamiento interno.'),
(7, 'Bases de Datos', 'Modelado, diseño y administración de bases de datos relacionales.');


INSERT INTO curso (tema_id, fecha_inicio, fecha_fin, docente_id, precio) VALUES
(1, '2022-06-15', '2023-06-15', 1, 2500),
(2, '2023-02-10', '2023-12-15', 2, 3000),
(3, '2024-01-15', '2024-06-15', 3, 2000),
(4, '2021-04-20', '2022-04-20', 4, 2750),
(5, '2025-09-01', '2026-05-30', 5, 3200),
(6, '2026-10-15', '2027-10-15', 6, 2800),
(7, '2023-11-10', '2024-09-10', 1, 1500);

INSERT INTO curso_alumno (curso_id, alumno_id) VALUES
-- Curso 1 (Diseño de sistemas)
(1, 1), (1, 2), (1, 3),
-- Curso 2 (Desarrollo de software)
(2, 4), (2, 5), (2, 6), (2, 7),
-- Curso 3 (Inglés)
(3, 8), (3, 9),
-- Curso 4 (Análisis Matemático)
 (4, 1), (4, 2),
-- Curso 5 (Algoritmos)
(5, 3), (5, 4), (5, 5),
-- Curso 6 (Sistemas Operativos)
(6, 6), (6, 7), (6, 8),
-- Curso 7 (Bases de Datos)
(7, 9), (7, 10);



