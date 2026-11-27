# 🧩 Arquitectura del Proyecto

## Estructura de Carpetas (`src/`)

```text
src/
├── components/
│   ├── common/      # Piezas de interfaz reutilizables (Button, Modal, PageSlide...)
│   ├── layout/      # Estructura general de la app, navegación y gestión de proyectos
│   └── board/       # Componentes específicos del tablero Kanban y tarjetas de tareas
├── config/          # Configuración e inicialización de Firebase
├── context/         # Estado global de la aplicación (AuthContext, ThemeContext)
├── pages/           # Vistas principales asociadas a las rutas (Login, Register, Board)
├── routes/          # Guardianes de navegación (ProtectedRoute, PublicRoute)
├── services/        # Capa de comunicación con Firestore y Firebase Auth
└── utils/           # Constantes, formateadores de fecha y funciones auxiliares
```

---

## Catálogo de Componentes

### 1. Componentes Principales (`layout/`, `board/`, `pages/`, `routes/`)

| Componente | Responsabilidad |
| :--- | :--- |
| `App` | Gestionar las rutas principales de la aplicación. |
| `ProtectedRoute` | Evitar que usuarios no autenticados accedan al dashboard. |
| `PublicRoute` | Evitar que usuarios autenticados accedan a Login y Register. |
| `AuthLayout` | Diseño compartido para las pantallas de Login y Register. |
| `LoginPage` | Página de inicio de sesión. |
| `RegisterPage` | Página de registro de nuevos usuarios. |
| `DashboardLayout` | Estructura principal de la aplicación autenticada. |
| `Sidebar` | Barra lateral con listado de proyectos, cambio de tema y cierre de sesión. |
| `ProjectList` | Mostrar los proyectos disponibles del usuario. |
| `ProjectItem` | Representar un proyecto individual en la barra lateral con opciones de edición/borrado. |
| `ProjectModal` | Ventana modal para crear y editar proyectos. |
| `BoardPage` | Página principal de un proyecto y su tablero Kanban. |
| `BoardHeader` | Cabecera con el nombre del proyecto activo y botón para crear tareas. |
| `Board` | Contenedor principal de las columnas del tablero. |
| `BoardColumn` | Mostrar las tareas filtradas por un estado concreto. |
| `TaskCard` | Tarjeta individual con título, prioridad y fecha límite de una tarea. |
| `TaskDetailDrawer` | Panel lateral unificado para crear, consultar y editar los detalles de una tarea. |

### 2. Componentes Reutilizables (`common/`)

| Componente | Uso |
| :--- | :--- |
| `PageSlide` | Panel lateral deslizante base (con animación y fondo oscuro). |
| `Modal` | Ventanas emergentes genéricas centradas. |
| `ConfirmDialog` | Diálogo de confirmación para acciones destructivas o cambios sin guardar. |
| `Button` | Botones principales, secundarios y de peligro. |
| `Input` | Campos de entrada de texto, correo, contraseña y fecha. |
| `Textarea` | Campos multilínea para descripciones y notas. |
| `Select` | Selectores desplegables (estados y prioridades). |
| `Badge` | Etiquetas visuales para fechas límite y estado vencido. |
| `PriorityDots` | Indicador visual de 3 puntos para los niveles de prioridad (Baja, Media, Alta). |
| `ThemeToggle` | Interruptor para alternar entre tema claro y oscuro. |
