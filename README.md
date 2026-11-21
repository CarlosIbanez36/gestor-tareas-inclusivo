# 📋 Gestor de Tareas Inclusivo y de Baja Carga Cognitiva

Aplicación web desarrollada en **React** y desplegada en **Firebase**, enfocada en la organización diaria con baja carga cognitiva, alto contraste y accesibilidad para todos los niveles digitales.

---

## 👥 Equipo de Desarrollo (Reparto tentativo)
* **Marc** — Arquitectura base, creación/edición de tareas y conexión con Firebase (`feature/gestion-tareas`)
* **Carlos** — Cabecera, progreso en vivo, Modo Enfoque y controles de accesibilidad (`feature/accesibilidad-enfoque`)
* **Julián** — Tablero de estados, tarjetas de tarea, buscador y filtros en tiempo real (`feature/tablero-filtros`)

---

## 🎯 Objetivo Técnico (React)
Interfaz reactiva donde **solo se renderiza lo que cambia**:
* **Datos Internos (`useState`):** Formularios, búsqueda en tiempo real, filtros activos, *Modo Enfoque* y ajustes de accesibilidad (`A- / A+` y reducción de animaciones).
* **Datos Externos (`props` y Firebase):** Comunicación entre componentes padre-hijo y persistencia en la nube.

---

## 🧩 Estructura de Componentes Propuesta
* `<HeaderAccesible />` — Barra de progreso, *Modo Enfoque* y controles de accesibilidad.
* `<FormularioTarea />` — Creación, edición y duplicado de tareas.
* `<BarraFiltros />` — Buscador instantáneo y filtros por prioridad/categoría.
* `<TableroTareas />` — Columnas de estado (*Pendiente*, *En progreso*, *Completada*).
* `<TarjetaTarea />` — Unidad individual con prioridad accesible (color + icono + texto) y acciones directas.

---

## 📦 Contrato de Datos (Objeto `tarea`)
Estructura base sugerida para coordinar los componentes:

```json
{
  "id": "1732100001",
  "titulo": "Preparar prototipo en UXPin",
  "descripcion": "Definir bloques principales de la interfaz",
  "categoria": "Estudio",
  "prioridad": "alta",
  "estado": "pendiente",
  "enfoqueHoy": true
}
