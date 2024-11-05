USE crud;

-- CREAR TABLAS
-- Tabla Docente
CREATE TABLE docente (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    legajo INT UNIQUE NOT NULL
);

-- Tabla Alumno
CREATE TABLE alumno (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    fecha_nacimiento DATE NOT NULL
);

-- Tabla Tema
CREATE TABLE tema (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT NOT NULL
);

-- Tabla Curso
IF NOT EXIST CREATE TABLE curso (
    id SERIAL PRIMARY KEY,
    tema_id INT REFERENCES tema(id),
    fecha_inicio DATE,
    fecha_fin DATE,
    docente_id INT REFERENCES docente(id),
    precio DECIMAL(10,2)
);

-- Tabla intermedia para la relación muchos a muchos entre curso y alumno
CREATE TABLE curso_alumno (
    curso_id INT REFERENCES curso(id) ON DELETE CASCADE,
    alumno_id INT REFERENCES alumno(id) ON DELETE CASCADE,
    PRIMARY KEY (curso_id, alumno_id)
);