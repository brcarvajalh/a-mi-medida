# A Mi Medida — Guía para presentar el primer avance

## 1. ¿Qué es este avance?

Es un prototipo académico inicial de una aplicación de moda inclusiva. La idea es ayudar a las personas a descubrir prendas según sus medidas y su estilo, para disminuir la incertidumbre al elegir tallas cuando compran ropa por internet.

En esta etapa no es una tienda real. No tiene usuarios registrados, pagos, inventarios reales ni marcas conectadas.

## 2. Guion de demostración (2–3 minutos)

**Inicio (30 segundos)**

> Mi proyecto se llama A Mi Medida. Identifiqué que comprar ropa por internet puede ser difícil porque las tallas varían y no siempre sabemos cuál escoger. Mi propuesta es que el usuario pueda ingresar sus medidas y recibir una sugerencia básica de talla al explorar prendas.

**Perfil (40 segundos)**

1. Haz clic en **Mi perfil**.
2. Pulsa **Usar datos de ejemplo**: pecho 100 cm, cintura 90 cm y cadera 105 cm.
3. Pulsa **Guardar medidas**.
4. Explica: "Por ahora, la información se almacena en este navegador, no en una base de datos".

**Explorar (40 segundos)**

1. Haz clic en **Explorar prendas**.
2. Muestra la camiseta y el jean, y sus sugerencias de talla.
3. Escribe **camisa** en el buscador y muestra cómo filtra los resultados.
4. Elige **Formal** en el filtro de estilo.
5. Explica: "El sistema compara las medidas ingresadas con una tabla de tallas de ejemplo".

**Cierre (20 segundos)**

> Para los siguientes avances me gustaría validar la idea con usuarios, investigar las diferencias de tallaje entre marcas y mejorar la experiencia de uso. Por ahora, el objetivo es mostrar cómo funcionaría el concepto.

## 3. ¿Cómo funciona por dentro?

Todo el prototipo está en **avance/index.html**. Tiene tres partes técnicas:

- **HTML:** define las pantallas, botones, textos, formulario y tarjetas de ropa. Puedes decir que es "la estructura".
- **CSS:** controla colores, espaciados y distribución. Puedes decir que es "el diseño visual".
- **JavaScript:** controla qué pantalla se muestra, filtra prendas, guarda medidas y propone tallas. Puedes decir que es "la lógica".

### Explicación de las funciones principales

**mostrar(vista):** oculta las secciones que no están seleccionadas y muestra Inicio, Mi perfil o Explorar prendas.

**prendas:** es una lista escrita directamente en el código, con ocho productos ficticios, precios, categoría y estilo.

**mostrarPrendas():** toma lo que escribes en Buscar y el estilo seleccionado; muestra solo las prendas que coinciden.

**sugerirTalla(prenda):** lee las medidas del perfil. Para camisetas, camisas o chaquetas consulta pecho y cintura. Para pantalones consulta cintura y cadera. Las compara contra límites de una tabla de ejemplo y presenta la primera talla que cumple los dos criterios. Esto **no reemplaza** la guía real de una marca.

**localStorage:** guarda los datos del perfil en **ese navegador**, usando la clave `amm-avance-perfil`. No hay servidor ni sincronización entre dispositivos.

## 4. Preguntas que podría hacer el profesor

**¿Ya está terminada la app?**

No. Es un primer avance que permite navegar, guardar un perfil y demostrar una recomendación de tallas basada en ejemplos.

**¿Tú programaste todo?**

Desarrollé la propuesta, definí qué debía hacer el prototipo y utilicé herramientas de inteligencia artificial como apoyo para escribir y ajustar el código. Ahora estoy aprendiendo cómo funciona cada módulo para poder seguir mejorándolo.

**¿Qué tecnologías usaste?**

HTML para la estructura, CSS para el diseño y JavaScript para las funciones. Publiqué los archivos en un repositorio de GitHub; GitHub Pages puede mostrarlos como sitio web.

**¿Dónde se guardan las medidas?**

En el almacenamiento local del navegador. No hay una base de datos; por eso no se comparten entre dispositivos.

**¿Cómo sabe la app qué talla recomendar?**

Compara las medidas de la persona con una tabla de rangos ficticios. La sugerencia es solo una demostración conceptual.

**¿Los productos son de marcas reales?**

No. Las ocho prendas y sus precios son ficticios.

**¿Qué hace falta?**

Realizar pruebas con personas, definir datos reales y autorizados de marcas, mejorar las sugerencias de talla y analizar aspectos de privacidad y operación.

## 5. Errores que debes evitar al presentarlo

- No digas que **garantiza** la talla correcta.
- No digas que hay **inteligencia artificial calculando tallas**: la lógica es una comparación de medidas con rangos.
- No digas que ya existe una **base de datos de usuarios**.
- No digas que la app está lista para comercializar.
- No hace falta ocultar el uso de IA como ayuda para programar.
- No necesitas memorizar todas las líneas del código: basta comprender los pasos del funcionamiento.

## 6. Enlaces

- **Avance:** https://brcarvajalh.github.io/a-mi-medida/avance/ (si GitHub Pages está publicado).
- **Código del avance:** https://github.com/brcarvajalh/a-mi-medida/blob/main/avance/index.html
- **App completa:** https://brcarvajalh.github.io/a-mi-medida/
