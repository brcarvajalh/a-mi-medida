# A Mi Medida — PWA móvil

**Moda que se adapta a ti.** Prototipo académico de descubrimiento de moda inclusiva, con experiencia de aplicación móvil instalable (PWA).

## Abrir o instalar

**Demo (cuando GitHub Pages esté habilitado):** https://brcarvajalh.github.io/a-mi-medida/

1. En GitHub, visita **Settings → Pages**.
2. En **Build and deployment**, elige **Deploy from a branch**.
3. Selecciona la rama **main**, carpeta **/(root)** y pulsa **Save**.
4. Cuando la página esté disponible, ábrela en el celular.
5. **iPhone con Safari:** menú Compartir → **Añadir a pantalla de inicio** → Añadir.
6. **Android con Chrome:** menú de tres puntos → **Instalar app** o **Añadir a pantalla de inicio**.

No necesitas instalar Visual Studio Code ni compilar nada. Se trata de una PWA estática hecha con HTML, CSS y JavaScript. Sus archivos principales están en la raíz del repositorio.

## Funcionalidades

- **Inicio:** portada editorial de bienvenida, prendas destacadas, acceso al perfil.
- **Explorar:** búsqueda, estilo (formal/casual/urbano/deportivo), categoría y presupuesto.
- **Mis looks:** cuatro conjuntos de prendas y opción de guardarlos.
- **Favoritos:** guardar y quitar productos.
- **Perfil:** estatura, pecho, cintura, cadera, ajuste y estilo; guarda las medidas localmente.
- **Tallas orientativas:** tablas simuladas para demostrar el algoritmo; no garantizan ajuste real.
- **PWA:** manifiesto, íconos, navegación inferior, soporte para instalación y acceso básico sin conexión después de la primera visita.

## Archivos

| Archivo | Función |
|---|---|
| `index.html` | Pantallas y estructura de la aplicación |
| `styles.css` | Identidad visual adaptable al celular |
| `app.js` | Catálogo, filtros, tallas, looks, favoritos y perfil |
| `manifest.webmanifest` | Configuración de instalación en móvil |
| `service-worker.js` | Almacenamiento temporal de archivos para uso sin conexión |
| `icons/` | Íconos PNG de instalación |

## Privacidad y limitaciones

La aplicación **no envía** tus medidas a servidores. Los datos locales se guardan con claves `amm-profile`, `amm-favorites` y `amm-looks` en localStorage; los datos de la versión web anterior se conservan al actualizar en el mismo navegador/origen. Si cambias de dispositivo o borras los datos del navegador, no se sincronizan.

**Todas las marcas, prendas, precios y tablas de talla son de demostración.** No hay carrito de compra, pagos, cuentas de usuario ni catálogo de marcas reales. Los looks son ilustraciones de combinaciones, no prueba virtual de ropa sobre una persona. Algunas funciones PWA varían por navegador y sistema operativo.

## Desarrollo desde GitHub

Puedes cambiar texto o estilo sin instalar editor: abre el archivo, pulsa el lápiz, edita y haz **Commit changes**. GitHub Pages publicará el cambio una vez que el despliegue termine.

En producción, habría que investigar y obtener catálogos autorizados, protección de datos personales, políticas de privacidad y cálculos reales de tallaje por prenda.
