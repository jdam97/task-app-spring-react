# 🖥️ Frontend - Todo App

Este es el cliente web del proyecto **Todo App**, desarrollado con **React**, **TypeScript** y **Tailwind CSS**.

Permite a los usuarios gestionar sus tareas diarias: crearlas, editarlas, eliminarlas, filtrarlas por estado y buscarlas por título o descripción.

---

## Tecnologías utilizadas

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

---

## ⚙️ Instalación y ejecución

1. Ve a la carpeta del frontend:

```bash
cd frontend
```

2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta la aplicación en modo desarrollo:
```bash
npm run dev
```

4. Abre el navegador en:
```bash
http://localhost:3000
```
```bash
Nota: es importante dejarlo en el puerto 3000 ya que en el backend se configuró por seguridad solo recibir peticiones de este puerto en el front.
```

## 🔌 Conexión con el backend
El frontend se conecta por defecto al backend que debe estar corriendo en:
```bash
http://localhost:8080/api
```
Si el backend usa otra dirección o puerto, debes actualizar la variable urlBase que aparece en App.tsx:

```bash
const urlBase = 'http://localhost:8080/api';
```

## 📂 Estructura de carpetas principales
```bash
frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── CardsInfo.tsx
│   │   ├── ModalTask.tsx
│   │   ├── SearchAndCreate.tsx
│   │   ├── Tabs.tsx
│   │   └── TaskList.tsx
│   ├── App.tsx
│   └── main.tsx
├── index.html
└── tailwind.config.ts
```

## 🧠 Componentes clave
| Componente        | Descripción                                                                        |
| ----------------- | ---------------------------------------------------------------------------------- |
| `App.tsx`         | Componente principal. Maneja el estado global y renderiza todos los subcomponentes |
| `CardsInfo`       | Muestra estadísticas de tareas                                                     |
| `SearchAndCreate` | Input de búsqueda y botón para crear tarea                                         |
| `Tabs`            | Filtros de tareas: todas, pendientes y completadas                                 |
| `TaskList`        | Lista de tareas renderizadas con opciones de edición y eliminación                 |
| `ModalTask`       | Modal para crear o editar una tarea                                                |


## 📌 Notas
Este proyecto está diseñado para ser fácil de mantener y escalar.

Tailwind facilita la creación de una UI moderna y responsiva.

Puedes extenderlo fácilmente con autenticación o paginación en el futuro.

## 👤 Autor
**Jonathan David Álvarez** - 
Estudiante ing. Sistemas

- [GitHub](https://github.com/jdam97)
- [Linkedin](https://www.linkedin.com/in/jonathand-alvarez/)
