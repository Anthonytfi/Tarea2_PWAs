# Proyecto PWA - Configuración Básica y Entorno de Desarrollo

Este repositorio contiene la estructura inicial para una aplicación web progresiva (PWA), con configuración de entorno local, Service Worker y buenas prácticas de gestión del proyecto.

---

## 📦 Estructura y Dependencias

El proyecto cuenta con un archivo `package.json` correctamente estructurado que distingue las dependencias necesarias para el entorno local y desarrollo. No se incluye la carpeta `node_modules`, siguiendo las buenas prácticas de Git.

Para instalar las dependencias:

```bash
npm install
```

# 🔧 Servidor de Desarrollo

Se utiliza live-server como servidor de desarrollo para facilitar la recarga automática del navegador.

```bash
npx live-server
```

Esto permite visualizar los cambios en tiempo real mientras se desarrolla la aplicación.

---

# 🧹 Archivos Ignorados (.gitignore)

Se ha configurado el archivo .gitignore para excluir:
- node_modules/
- .env y configuraciones locales
- Archivos temporales (.log, .DS_Store, Thumbs.db)
- Directorios de editor (.vscode/, .idea/)
- Carpeta dist/ y build/ (generadas en producción)
Esta configuración asegura un repositorio limpio y liviano

---

# ⚙️ Registro del Service Worker
El archivo index.html incluye la lógica para el registro de un Service Worker:

```html
<script>
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
      .then(reg => console.log('Service Worker registrado ✅'))
      .catch(err => console.error('Error al registrar el Service Worker ❌', err));
  }
</script>
```

Se utiliza un sw.js básico que confirma el evento de instalación y activación. La aplicación se ejecuta localmente en un entorno seguro (localhost) compatible con Service Workers.

# Estado actual

- ✔️ Entorno configurado correctamente
- ✔️ Registro de Service Worker funcional
- ✔️ .gitignore implementado profesionalmente
- ⏳ README en desarrollo (actual documento)
- ❌ Sin herramientas de calidad aún (ESLint, Prettier)

---

# Autor
Nombre: Anthony Mejia 
Fecha: 03/08/2025















