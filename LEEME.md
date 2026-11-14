# Mesa de lectura — app para tablet (v21)

Todo se guarda **en tu dispositivo** (IndexedDB) y la app pide almacenamiento persistente. Funciona sin internet después de instalarla.

## Vía recomendada: instalar desde GitHub Pages (gratis y permanente)
Hazlo desde el PC (la tablet sirve, pero subir carpetas es más cómodo en el PC).
1. Crea una cuenta en github.com.
2. **New repository** → nombre `mesa-de-lectura` → Public → Create.
3. **uploading an existing file** → descomprime este zip y arrastra TODO su contenido (incluida la carpeta `vendor` y la carpeta oculta `.github`) → **Commit changes**.
4. **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: main / (root) → Save**.
5. En 1–2 minutos tendrás la dirección `https://TU-USUARIO.github.io/mesa-de-lectura/`.
6. En la tablet, abre esa dirección en **Chrome** → botón **⬇ Instalar** (o menú ⋮ → Instalar app). Queda como una app más, a pantalla completa.

**Actualizar:** sube de nuevo `index.html` y `sw.js` (con la caché nueva) al repositorio y abre la app dos veces.

## Opción experimental: APK
En el repositorio: **Actions → Compilar APK para Android → Run workflow**. Al terminar, descarga `mesa-de-lectura-apk` (zip con `app-debug.apk`) e instálalo en la tablet (permite «instalar apps desconocidas»).
**Ojo:** dentro de un APK, «Exportar PDF» y los guardados por descarga pueden no funcionar (falta el plugin de archivos). Por eso la vía PWA es la principal.

## Importante: tus datos
Están en el navegador/app del dispositivo. Desinstalar o borrar los datos del sitio **los elimina**. Haz **Copia de seguridad** (Biblioteca → ⋯) de vez en cuando. La copia no incluye los PDFs. Los datos del enlace de claude.ai y los de esta app son separados: pásalos con Copia de seguridad / Restaurar.
