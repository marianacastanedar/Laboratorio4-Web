### Error #1: Falta de paréntesis en ambas funciones
**Ubicación:** Línea 30 y 34 del archivo original  
**Tipo de error:** Sintaxis
**Qué estaba mal:** faltaba un paréntesis al terminar cada funcion 
**Cómo lo corregí:** 

  res.writeHead(200, { "Content-Type": "text/plain" })
  res.end("Ruta no encontrada")
}) <--- agregar ese )

server.listen(PORT, () => {
  console.log("Servidor corriendo en http://localhost:3000")
}) <--- agregar ese )

**Por qué funciona ahora:** [Justificación técnica breve] 