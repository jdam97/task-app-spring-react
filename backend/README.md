# 🔙 Backend - Todo App (Spring Boot)

Este es el backend del proyecto **Todo App**, una API REST desarrollada con **Java 17**, **Spring Boot** y **MySQL** para gestionar tareas.

Se encarga de crear, leer, actualizar y eliminar tareas, así como filtrarlas por estado (pendientes o completadas) y contarlas.

---

## 🚀 Tecnologías utilizadas

- Java 17
- Spring Boot
- Spring Web
- Spring Data JPA
- MySQL
- Maven

---

## ⚙️ Configuración

1. Asegúrate de tener MySQL instalado y una base de datos creada.

2. Configura tu archivo `application.properties`

### Ejemplo:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/todo_app
spring.datasource.username=root
spring.datasource.password=tu_contraseña

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
server.port=8080
```

## ▶️ Cómo ejecutar el proyecto

1. Entra a la carpeta del backend:
```bash
cd backend
```
2. ejecuta con maven o abre el proyecto en IntelliJ o VS Code y ejecuta la clase TaskApiApplication.
```bash
./mvnw spring-boot:run
```

✅ Listo ya tienes corriendo tu backend y puedes realizar peticiones desd el front.
## 📂 Estructura de carpetas principal

```bash
backend/
├── src/
│   ├── main/
│   │   ├── java/com/jdam/task_api/
│   │   │   ├── controller/
│   │   │   ├── model/
│   │   │   ├── repo/
│   │   │   ├── service/
│   │   │   └── TaskApiApplication.java
│   │   └── resources/
│   │       ├── application.properties
│   │       └── ...
├── pom.xml
└── README.md
```

## 📌 Endpoints disponibles

| Método | Endpoint                | Descripción                                    |
| ------ | ----------------------- | ---------------------------------------------- |
| GET    | `/api/tasks`            | Listar todas las tareas                        |
| GET    | `/api/tasks?done=true`  | Listar solo tareas completadas                 |
| GET    | `/api/tasks?done=false` | Listar solo tareas pendientes                  |
| GET    | `/api/tasks/count`      | Contar tareas (total, pendientes, completadas) |
| POST   | `/api/task`             | Crear una nueva tarea                          |
| PUT    | `/api/task/{id}`        | Actualizar una tarea existente                 |
| DELETE | `/api/task/{id}`        | Eliminar una tarea                             |
| PUT    | `/api/task/done/{id}`   | Cambiar estado de completado/pending           |

## 📦 Ejemplo de request para crear una tarea
**POST**

```json
{
  "title": "Estudiar Java",
  "description": "Repasar POO y Spring Boot",
  "date": "2025-07-06T15:00:00",
  "done": false
}
```

## 📝 ApiResponse
```json
{
  "timestamp": "2025-07-06T15:30:00",
  "status": 201,
  "message": "Tarea creada exitosamente",
  "data": {
    "id": 1,
    "title": "Estudiar Java",
    "description": "Repasar POO y Spring Boot",
    "date": "2025-07-06T15:00:00",
    "done": false
  }
```


## 🧠 Notas adicionales

- El backend está pensado para funcionar sin autenticación por ahora.

- Puedes extenderlo para que maneje usuarios, JWT, validaciones, etc.

- Todas las respuestas están estructuradas con un envoltorio ApiResponse.

## 👤 Autor

**Jonathan David Álvarez**  
Estudiante de Ingeniería de Sistemas  
Desarrollador Java Full Stack

- [GitHub](https://github.com/jdam97)
- [Linkedin](https://www.linkedin.com/in/jonathand-alvarez/)




