
# Todo App- Lista de tareas

Aplicación full stack para gestionar tareas de forma eficiente.  
Permite crear, editar, eliminar, buscar y filtrar tareas por estado (pendientes, completadas o todas).


## Tecnologías Utilizadas
- **Frontend:** React, Typescript,Tailwind Css.
- **Backend:** Java, Spring Boot, JPA, MySQL.
- **ApiClient:** Axios.


## Funcionalidades principales
- ✅ Crear tareas
- 📝 Editar tareas existentes
- 🗑️ Eliminar tareas
- 🔍 Buscar tareas por título o descripción
- 📂 Filtrar por estado (todas, completadas, pendientes)
- 🗓️ Guardar y mostrar fecha/hora

## Arquitectura del proyecto
El frontend se comunica con el backend a través de una API REST.  
El backend expone endpoints protegidos para la gestión de tareas y persistencia en base de datos MySQL.

## Estructura de carpetas

```plaintext
mi-todo-app/
├── backend/
│   └── src/...
├── frontend/
│   └── src/...
├── README.md
└── .gitignore
```

## 🔹 2. Instrucciones por carpeta
📁 [Frontend - React](./frontend/README.md)

📁 [Backend – Spring Boot](./backend/README.md)

## 👤 Autor
**Jonathan David Álvarez** - 
Estudiante ing. Sistemas

- [GitHub](https://github.com/jdam97)
- [Linkedin](https://www.linkedin.com/in/jonathand-alvarez/)

## 🧪 En desarrollo
Este proyecto es parte de un ejercicio práctico y puede seguir mejorando con:

- 🔐 Autenticación de usuarios

- 🐳 Implementación con Docker

- ☁️ Deploy a producción (Vercel + Render)