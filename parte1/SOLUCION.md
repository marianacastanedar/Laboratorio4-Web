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

### Error #2: faltaba await en fs.readFile
**Ubicación:** Línea 22 y 24 del archivo original (servidor_malo.js)
**Tipo de error:** Lógica Asíncrona
**Qué estaba mal:** faltaba un await en el fs.readFile y por eso mismo se quita el JSON.stringify 

    const texto = fs.readFile(filePath, "utf-8")
    res.writeHead(200, { "Content-Type": "application/json" })
    res.end(JSON.stringify(texto))

**Cómo lo corregí:** 
    const texto = await fs.readFile(filePath, "utf-8") <-- agregar el await
    res.writeHead(200, { "Content-Type": "application/json" })
    res.end((texto)) <-- quitar el JSON.stringify


**Por qué funciona ahora:** [Justificación técnica breve] 

