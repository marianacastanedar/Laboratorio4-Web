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

### Error #2: application-json -> application/json
**Ubicación:** Línea 15 del archivo original  
**Tipo de error:** Protocolo HTTP
**Qué estaba mal:** el guión debería de ser un paréntesis 
**Cómo lo corregí:** 

    res.writeHead(200, { "Content-Type": "application-json" })

    res.writeHead(200, { "Content-Type": "application/json" }) --> "application/json" en lugar de "application-json"



**Por qué funciona ahora:** [Justificación técnica breve] 


### Error #3: faltaba await en fs.readFile
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

### Error #4: error 200 cuando la ruta no existe
**Ubicación:** Línea 28 del archivo original (servidor_malo.js)
**Tipo de error:** Código de respuesta
**Qué estaba mal:** tenía el código de respuesta 200 cuando la ruta no existe pero debería de ser 404

    res.writeHead(200, { "Content-Type": "text/plain" })
    res.end("Ruta no encontrada")

**Cómo lo corregí:** 
    
    res.writeHead(404, { "Content-Type": "text/plain" })
    res.end("Ruta no encontrada")


**Por qué funciona ahora:** [Justificación técnica breve] 

### Error #5: un content type incorrecto
**Ubicación:** Línea 15 del archivo original (servidor_malo.js)
**Tipo de error:** un Content type incorrecto
**Qué estaba mal:** Content type es incorrecto ya que dice que será un applicaction.json pero envía un texto plano que sería "Ruta de información" asi que hay que poner text/plain

    res.writeHead(200, { "Content-Type": "application-json" })
    res.end("Ruta de información")

**Cómo lo corregí:** 
    
    res.writeHead(200, { "Content-Type": "text/plain" })
    res.end("Ruta de información")


**Por qué funciona ahora:** [Justificación técnica breve] 
