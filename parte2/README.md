# API de Playlist

API REST construida con Node.js y Express para gestionar una colección de canciones.

## Requisitos

- Node.js
- npm

## Instalación

```bash
npm install
```

## Cómo correrlo

```bash
node index.js
```

El servidor queda corriendo en `http://localhost:3000`

## Endpoints

| Método | URL | Descripción |
|--------|-----|-------------|
| GET | `/api/canciones` | Obtiene todas las canciones |
| GET | `/api/canciones?artista=nombre` | Filtra canciones por artista |
| GET | `/api/canciones/:id` | Obtiene una canción por id |
| POST | `/api/canciones` | Crea una canción nueva |
| PUT | `/api/canciones/:id` | Reemplaza una canción completa |
| PATCH | `/api/canciones/:id` | Actualiza campos específicos de una canción |
| DELETE | `/api/canciones/:id` | Elimina una canción |

## Campos de una canción

| Campo | Tipo | Requerido |
|-------|------|-----------|
| titulo | string | sí |
| artista | string | sí |
| genero | string | sí |
| duracion | string | sí |
| favorita | boolean | no (default: false) |