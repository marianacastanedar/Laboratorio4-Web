import express from "express"
import crypto from "crypto"

const app = express()
const PORT = 3000

app.use(express.json())

//id random
let canciones = [
  { id: crypto.randomUUID(), titulo: "Chan Chan", artista: "Buena Vista Social Club", genero: "pop", duracion: "4:18", favorita: false },
  { id: crypto.randomUUID(), titulo: "Llorarás", artista: "La Dimensión Latina", genero: "salsa", duracion: "3:48", favorita: false },
  { id: crypto.randomUUID(), titulo: "Por El Amor De Una Mujer", artista: "Julio Iglesias", genero: "pop", duracion: "3:48", favorita: true },
  { id: crypto.randomUUID(), titulo: "Canción de las simples cosas", artista: "Mercedes Sosa", genero: "pop", duracion: "2:51", favorita: true },
]

// inicio que enseña los endpoints que hay -> como en el ejemplo de template
app.get("/", (req, res) => {
  const html = `
    <h1>API de Canciones</h1>
    <ul>
      <li>GET /api/canciones — todas las canciones</li>
      <li>GET /api/canciones?artista=nombre — filtro por artista</li>
      <li>GET /api/canciones/:id — canción por id</li>
      <li>POST /api/canciones — crear canción</li>
      <li>PUT /api/canciones/:id — reemplazar canción completa - PUT</li>
      <li>PATCH /api/canciones/:id — actualizar campos específicos - PATCH</li>
      <li>DELETE /api/canciones/:id — eliminar canción</li>
    </ul>
  `
  res.send(html)
})

// get todo y filtro del artista
app.get("/api/canciones", (req, res) => {
  const { artista } = req.query
  let resultado = canciones
  if (artista) {
    resultado = canciones.filter(c => c.artista.toLowerCase().includes(artista.toLowerCase()))
  }
  res.status(200).json({ ok: true, data: resultado })
})

// get con id
app.get("/api/canciones/:id", (req, res) => {
  const cancion = canciones.find(c => c.id === req.params.id)
  if (!cancion) return res.status(404).json({ ok: false, error: "Canción no encontrada" })
  res.status(200).json({ ok: true, data: cancion })
})

// post
app.post("/api/canciones", (req, res) => {
  const { titulo, artista, genero, duracion, favorita } = req.body
  if (!titulo || !artista || !genero || !duracion) {
    return res.status(400).json({ ok: false, error: "Faltan campos obligatorios: titulo, artista, genero, duracion" })
  }
  const nueva = { id: crypto.randomUUID(), titulo, artista, genero, duracion, favorita: favorita ?? false }
  canciones.push(nueva)
  res.status(201).json({ ok: true, data: nueva })
})

// put
app.put("/api/canciones/:id", (req, res) => {
  const index = canciones.findIndex(c => c.id === req.params.id)
  if (index === -1) return res.status(404).json({ ok: false, error: "Canción no encontrada" })
  const { titulo, artista, genero, duracion, favorita } = req.body
  if (!titulo || !artista || !genero || !duracion) {
    return res.status(400).json({ ok: false, error: "Faltan campos obligatorios: titulo, artista, genero, duracion" })
  }
  canciones[index] = { id: req.params.id, titulo, artista, genero, duracion, favorita: favorita ?? false }
  res.status(200).json({ ok: true, data: canciones[index] })
})

// patch
app.patch("/api/canciones/:id", (req, res) => {
  const index = canciones.findIndex(c => c.id === req.params.id)
  if (index === -1) return res.status(404).json({ ok: false, error: "Canción no encontrada" })
  canciones[index] = { ...canciones[index], ...req.body }
  res.status(200).json({ ok: true, data: canciones[index] })
})

// delete
app.delete("/api/canciones/:id", (req, res) => {
  const index = canciones.findIndex(c => c.id === req.params.id)
  if (index === -1) return res.status(404).json({ ok: false, error: "Canción no encontrada" })
  const eliminada = canciones.splice(index, 1)[0]
  res.status(200).json({ ok: true, data: eliminada })
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})