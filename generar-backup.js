const fs = require('fs');
const path = require('path');

// Carpetas que queremos escanear
const DIRECTORIOS = ['app', 'components', 'lib'];
// Tipos de archivo que nos interesan
const EXTENSIONES = ['.js', '.jsx'];
// El nombre del archivo que le vas a pasar a la IA
const ARCHIVO_SALIDA = 'contexto-actual-mu.txt';

let contenidoBackup = '=== BACKUP DE CONTEXTO MU AETHEL ===\n';
contenidoBackup += `Generado el: ${new Date().toLocaleString()}\n\n`;

function leerDirectorio(dir) {
  if (!fs.existsSync(dir)) return;
  const archivos = fs.readdirSync(dir);
  
  archivos.forEach(archivo => {
    const rutaCompleta = path.join(dir, archivo);
    const stat = fs.statSync(rutaCompleta);
    
    if (stat.isDirectory()) {
      // Ignorar carpetas ocultas o de compilación por las dudas
      if (!archivo.startsWith('.')) {
        leerDirectorio(rutaCompleta);
      }
    } else {
      // Si es un archivo .js o .jsx, lo leemos
      if (EXTENSIONES.includes(path.extname(rutaCompleta))) {
        const contenido = fs.readFileSync(rutaCompleta, 'utf-8');
        // Usamos barras normales (/) para que se lea igual en Windows o Mac
        const rutaLimpia = rutaCompleta.replace(/\\/g, '/');
        
        contenidoBackup += `\n// =========================================================================\n`;
        contenidoBackup += `// ARCHIVO: ${rutaLimpia}\n`;
        contenidoBackup += `// =========================================================================\n\n`;
        contenidoBackup += contenido;
        contenidoBackup += `\n\n`;
      }
    }
  });
}

// Ejecutar el escaneo
console.log('Escaneando archivos del servidor...');
DIRECTORIOS.forEach(dir => leerDirectorio(dir));

// Escribir el archivo final
fs.writeFileSync(ARCHIVO_SALIDA, contenidoBackup);
console.log(`✅ ¡Éxito! Se generó el archivo: ${ARCHIVO_SALIDA}`);
console.log('Ya podés subirle este archivo a la IA para refrescarle la memoria.');
