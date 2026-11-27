# 🗄️ Modelo de Datos (Cloud Firestore)

La persistencia en **Cloud Firestore** se estructura en tres colecciones principales:

## Colección `users`
```json
{
  "uid": "user_123456",
  "nombre": "Ana García",
  "email": "ana@ejemplo.com",
  "createdAt": "2026-11-27T10:00:00Z"
}
```

## Colección `projects`
```json
{
  "id": "proj_987654",
  "nombre": "Rediseño Web",
  "descripcion": "Prototipo y desarrollo de la nueva interfaz",
  "ownerId": "user_123456"
}
```

## Colección `tasks`
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
