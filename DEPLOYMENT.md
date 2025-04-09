
# Instrucciones para desplegar en GitHub Pages

Este proyecto está configurado para ser desplegado en GitHub Pages. Sigue estos pasos para publicar tu clon de Netflix en línea.

## Paso 1: Crear un repositorio en GitHub

1. Ve a [GitHub](https://github.com/) y crea una cuenta si aún no tienes una.
2. Haz clic en el botón "New" para crear un nuevo repositorio.
3. Nombra tu repositorio `netflix-clone-espanol` (o el nombre que prefieras).
4. Elige si quieres que sea público o privado.
5. Haz clic en "Create repository".

## Paso 2: Subir tu código al repositorio

Desde la terminal, navega hasta la carpeta de tu proyecto y ejecuta:

```bash
# Inicializa Git si aún no lo has hecho
git init

# Añade todos los archivos al seguimiento de Git
git add .

# Haz el primer commit
git commit -m "Primer commit: Clon de Netflix en Español"

# Conecta tu repositorio local con el repositorio remoto de GitHub
# (Reemplaza 'TU_USUARIO' con tu nombre de usuario de GitHub)
git remote add origin https://github.com/TU_USUARIO/netflix-clone-espanol.git

# Sube los cambios a GitHub
git push -u origin main
```

## Paso 3: Configurar GitHub Pages

1. Primero, instala el paquete gh-pages como dependencia de desarrollo:

```bash
npm install gh-pages --save-dev
```

2. Abre tu archivo `package.json` y añade los siguientes scripts:

```json
"scripts": {
  // ... otros scripts
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. También añade una propiedad `homepage` al inicio del archivo `package.json`:

```json
{
  "homepage": "https://TU_USUARIO.github.io/netflix-clone-espanol",
  // resto del archivo...
}
```

## Paso 4: Desplegar a GitHub Pages

Ejecuta el comando:

```bash
npm run deploy
```

Este comando creará una versión de producción de tu aplicación y la publicará en la rama `gh-pages` de tu repositorio.

## Paso 5: Configurar GitHub Pages en tu repositorio

1. Ve a tu repositorio en GitHub.
2. Haz clic en "Settings" (Configuración).
3. Desplázate hacia abajo hasta la sección "GitHub Pages".
4. En "Source", selecciona la rama `gh-pages` y guarda.

En unos minutos, tu sitio estará disponible en:
`https://TU_USUARIO.github.io/netflix-clone-espanol`

## Nota sobre el enrutamiento

Este proyecto usa React Router, por lo que necesita configuración especial para funcionar correctamente en GitHub Pages. Por eso:

1. Hemos añadido un archivo `public/404.html` para manejar las redirecciones.
2. Incluimos un script en `index.html` para manejar correctamente las rutas.
3. Configuramos la base URL en `vite.config.ts`.

Con estas configuraciones, tu aplicación debería funcionar correctamente en GitHub Pages.

¡Disfruta de tu clon de Netflix en español!
