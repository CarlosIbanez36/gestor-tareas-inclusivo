# 📋 Taskify — Gestor de Proyectos y Tareas Kanban

Aplicación web desarrollada en **React** y desplegada en **Firebase** (Authentication y Cloud Firestore) para la gestión ágil de proyectos y tareas mediante tableros Kanban. El proyecto está diseñado con un enfoque en la usabilidad, baja carga cognitiva, alto contraste, modo oscuro y accesibilidad para todos los niveles digitales.

---

## ✨ Características Principales (MVP)

* **🔐 Autenticación Segura:** Registro, inicio de sesión con correo/contraseña, persistencia de sesión y protección de rutas privadas y públicas mediante Firebase Authentication.
* **📁 Gestión de Proyectos:** Creación, consulta, edición y eliminación de proyectos asociados a cada usuario desde una barra lateral intuitiva.
* **📊 Tablero Kanban:** Visualización del flujo de trabajo en 4 columnas de estado (*Pendiente*, *En progreso*, *Revisión* y *Completada*), con contador dinámico de tareas por columna y desplazamiento horizontal en móvil.
* **✅ Gestión Integral de Tareas:** Creación, consulta, edición y eliminación de tareas desde un panel lateral unificado (`PageSlide`) con advertencia de cambios sin guardar, niveles de prioridad (*Baja*, *Media*, *Alta*) y fechas límite (`DD/MM/AAAA`).
* **♿ Accesibilidad e Interfaz:** Diseño adaptable, componentes reutilizables, modo oscuro (`ThemeToggle`) y alto contraste.

*(Consulta el alcance completo y futuras ampliaciones en [`docs/features.md`](docs/features.md)).*

---

## 🛠️ Stack Tecnológico

* **Frontend:** React (JSX, Hooks: `useState`, `useEffect`, `useContext`)
* **Enrutamiento:** React Router DOM
* **Backend as a Service (BaaS):** Firebase (Authentication y Cloud Firestore)
* **Hosting:** Firebase Hosting

---

## 📚 Documentación del Proyecto

Toda la documentación técnica detallada se encuentra organizada en la carpeta `docs/`:

* **[Arquitectura y Componentes (`docs/architecture.md`)](docs/architecture.md):** Estructura de carpetas de `src/` y catálogo de componentes.
* **[Modelo de Datos (`docs/database.md`)](docs/database.md):** Estructura de colecciones y documentos en Cloud Firestore.

---

## 🚀 Instalación y Ejecución Local

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/CarlosIbanez36/taskify
   cd taskify
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno:**
   Crea un archivo `.env` en la raíz del proyecto con las credenciales de tu proyecto de Firebase:
   ```env
   VITE_FIREBASE_API_KEY=tu_api_key
   VITE_FIREBASE_AUTH_DOMAIN=tu_auth_domain
   VITE_FIREBASE_PROJECT_ID=tu_project_id
   VITE_FIREBASE_STORAGE_BUCKET=tu_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
   VITE_FIREBASE_APP_ID=tu_app_id
   ```

4. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
