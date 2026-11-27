# 🔀 Flujo de Trabajo con Git (Ramas y Commits)

Guía rápida de convenciones para mantener limpio el historial de **Taskify** durante el desarrollo.

---

## 1. 🌿 Crear una Rama (Desde `main` actualizado)

* **Regla principal:** Nunca programes directamente en `main`. Crea siempre una rama nueva por cada funcionalidad, vista o corrección.
* **Cuándo crear una rama:** Al empezar una tarea o componente nuevo (ej: crear el sistema de login, construir el tablero Kanban o conectar Firestore). Cuando la funcionalidad esté terminada y probada, se fusiona con `main` y se crea una nueva para la siguiente tarea.
* **Formato:** `tipo/descripcion-corta` *(o `tipo/numero-issue-descripcion-corta` si usas GitHub Issues, todo en minúsculas y separado por guiones)*.

### Prefijos permitidos
* `feat/` — Nueva funcionalidad o componente (ej: `feat/login-page`, `feat/page-slide`).
* `fix/` — Corrección de un fallo o bug (ej: `fix/empty-task-validation`).
* `style/` — Cambios visuales, Tailwind CSS o modo oscuro (ej: `style/dark-mode-contrast`).
* `refactor/` — Reorganización de código sin cambiar lo que hace (ej: `refactor/extract-date-utils`).
* `docs/` — Cambios en `README.md` o en la carpeta `docs/` (ej: `docs/git-workflow`).
* `chore/` — Configuración inicial, instalación de paquetes o estructura (ej: `chore/firebase-setup`).

### Comandos para empezar una rama
```bash
git checkout main
git pull origin main
git checkout -b feat/page-slide-component
```

---

## 2. 💾 Hacer Commits y Push (Frecuencia y nombres)

### ¿Cada cuánto hacer `commit`?
* Cada vez que completes una **unidad lógica pequeña que funcione sin romper la app** (ej: terminar el componente `Button.jsx`, añadir la función de crear tarea en `taskService.js`, o corregir una validación).
* **Regla de oro:** Commits pequeños y frecuentes (cada 30–60 min de avance real), evitando commits gigantes con 20 archivos mezclados al final del día.

### ¿Cada cuánto hacer `push`?
* Como mínimo **al terminar cada sesión de trabajo** (como copia de seguridad en GitHub) o cada 2–3 commits si trabajas en equipo.

### Formato del mensaje de commit
Usa **Conventional Commits** en inglés e imperativo:

`tipo: qué hace este cambio`

* `feat: add reusable PageSlide drawer component`
* `feat: implement user registration with Firestore document`
* `fix: prevent submitting task without title`
* `style: adjust Kanban columns horizontal scroll on mobile`
* `refactor: move date formatting to dateUtils`
* `docs: add git workflow guide for branches and commits`
* `chore: install firebase and react-router-dom`

### Comandos habituales
```bash
git status
git add .
git commit -m "feat: add reusable PageSlide drawer component"
git push -u origin feat/page-slide-component
```
