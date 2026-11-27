# 📋 Taskify — Gestor de Proyectos y Tareas Kanban

Aplicación web desarrollada en **React** y desplegada en **Firebase** (Authentication y Cloud Firestore) para la gestión ágil de proyectos y tareas mediante tableros Kanban. El proyecto está diseñado con un enfoque en la usabilidad, baja carga cognitiva, alto contraste, modo oscuro y accesibilidad para todos los niveles digitales.

---

## ✨ Características Principales (MVP)

* **🔐 Autenticación Segura:** Registro, inicio de sesión con correo/contraseña, persistencia de sesión y protección de rutas privadas y públicas mediante Firebase Authentication.
* **📁 Gestión de Proyectos:** Creación, consulta, edición y eliminación de proyectos asociados a cada usuario desde una barra lateral intuitiva (con eliminación en cascada o gestión de tareas asociadas).
* **📊 Tablero Kanban:** Visualización del flujo de trabajo en 4 columnas de estado (*Pendiente*, *En progreso*, *Revisión* y *Completada*), con contador dinámico de tareas por columna y soporte responsivo con desplazamiento horizontal.
* **✅ Gestión Integral de Tareas:** Creación, consulta, edición y eliminación de tareas desde un panel lateral unificado (*Drawer*) con advertencia de cambios sin guardar, niveles de prioridad (*Baja*, *Media*, *Alta*) y fechas límite (`DD/MM/AAAA`).
* **♿ Accesibilidad e Interfaz:** Diseño adaptable, componentes reutilizables, modo oscuro (`ThemeToggle`), alto contraste y controles orientados a reducir la carga cognitiva.

*(Funcionalidades futuras planificadas: buscador en tiempo real, filtros avanzados, barra de progreso del proyecto y Drag & Drop).*

---

## 🛠️ Stack Tecnológico

* **Frontend:** React (Hooks: `useState`, `useEffect`, `useContext` / `props`)
* **Enrutamiento:** React Router DOM (Rutas protegidas y públicas)
* **Backend as a Service (BaaS):** Firebase
  * **Firebase Authentication:** Gestión de usuarios y sesiones.
  * **Cloud Firestore:** Base de datos NoSQL en tiempo real.
* **Hosting:** Firebase Hosting

---

## 🧩 Arquitectura de Componentes

La aplicación sigue una arquitectura modular dividida en vistas/componentes principales y una librería de componentes comunes reutilizables:

### 1. Componentes Principales

| Componente | Responsabilidad |
| :--- | :--- |
| `App` | Gestionar las rutas principales de la aplicación. |
| `ProtectedRoute` | Evitar que usuarios no autenticados accedan al dashboard. |
| `PublicRoute` | Evitar que usuarios autenticados accedan a Login y Register. |
| `AuthLayout` | Diseño compartido para las pantallas de Login y Register. |
| `LoginPage` | Página de inicio de sesión. |
| `RegisterPage` | Página de registro de nuevos usuarios. |
| `DashboardLayout` | Estructura principal de la aplicación autenticada. |
| `Sidebar` | Barra lateral con listado de proyectos y opciones de usuario. |
| `ProjectList` | Mostrar los proyectos disponibles del usuario. |
| `ProjectItem` | Representar un proyecto individual en la barra lateral. |
| `BoardPage` | Página principal de un proyecto y su tablero Kanban. |
| `BoardHeader` | Cabecera con el nombre del proyecto activo y botón para crear tareas. |
| `Board` | Contenedor principal de las columnas del tablero. |
| `BoardColumn` | Mostrar las tareas filtradas por un estado concreto. |
| `TaskCard` | Tarjeta individual con la información resumida de una tarea. |
| `TaskModal` | Ventana modal para crear y editar tareas. |
| `TaskDetailDrawer` | Panel lateral para consultar y gestionar los detalles de una tarea. |
| `ProjectModal` | Ventana modal para crear y editar proyectos. |

### 2. Componentes Reutilizables

| Componente | Uso |
| :--- | :--- |
| `Button` | Botones principales, secundarios y de acción. |
| `Input` | Campos de entrada de texto y formularios. |
| `Textarea` | Campos multilínea para descripciones y notas. |
| `Select` | Selectores desplegables (estados, prioridades, etc.). |
| `Modal` | Ventanas emergentes genéricas. |
| `Drawer` | Panel lateral deslizante base. |
| `Badge` | Etiquetas visuales para prioridades o estados. |
| `Avatar` | Imagen de perfil o iniciales del usuario. |
| `ConfirmDialog` | Diálogo de confirmación para acciones destructivas (eliminar proyecto/tarea). |
| `ThemeToggle` | Interruptor para alternar entre tema claro y oscuro. |

---

## 🗄️ Modelo de Datos (Cloud Firestore)

La persistencia en **Cloud Firestore** se estructura en tres colecciones principales:

### Colección `users`
```json
{
  "uid": "user_123456",
  "nombre": "Ana García",
  "email": "ana@ejemplo.com",
  "createdAt": "2026-11-27T10:00:00Z"
}
```

### Colección `projects`
```json
{
  "id": "proj_987654",
  "nombre": "Rediseño Web",
  "descripcion": "Prototipo y desarrollo de la nueva interfaz",
  "ownerId": "user_123456"
}
```

### Colección `tasks`
```json
{
  "id": "task_1732100001",
  "projectId": "proj_987654",
  "titulo": "Preparar prototipo en UXPin",
  "descripcion": "Definir bloques principales de la interfaz",
  "estado": "pendiente",
  "prioridad": "media",
  "fechaLimite": "2026-12-15",
  "createdAt": "2026-11-27T10:05:00Z",
  "updatedAt": "2026-11-27T10:05:00Z"
}
```


## 🚀 Instalación y Ejecución Local

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/CarlosIbanez36/gestor-tareas-inclusivo
   cd gestor-tareas-inclusivo
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
