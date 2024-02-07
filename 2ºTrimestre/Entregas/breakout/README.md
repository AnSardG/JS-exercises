# Proyecto Breakout

Este proyecto es una implementación del clásico juego Breakout en JavaScript (manipulando la API Canvas), HTML5 y CSS3. El juego consiste en controlar una paleta para rebotar una bola y destruir bloques colocados en la parte superior de la pantalla.


## Desarrollo

- Dibujar los elementos en el canvas
- Usa los trazados de canvas para dibujar las diferentes formas
- Añade la animación con la función `requestAnimationFrame(cb)`
- Mueve la paleta manejando eventos del teclado
- Implementa la detección de colisiones
- Maneja la puntuación
- Añade un botón que presente las reglas mediante un sistema de slider
- Iniciar el juego al pulsar cualquier tecla. Mientras tanto la bola está pegada a la paleta.
- Cambio en el diseño del muro de ladrillos, tanto en patrón como en colores.
- Pausar el juego tras pulsar la tecla "p".
- Ladrillos con potenciadores escondidos; existen ciertos ladrillos aleatorios, siguiendo una probabilidad de potenciador, que al romperlos conseguirás que tu paleta se ensanche pero vaya más lenta o se achique y vaya más rápida.
- Ladrillos que aumentan la velocidad de la bola progresivamente; dichos ladrillos "parpadean" y siempre son amarillos.

## Referencias

El código JavaScript hace uso de varios elementos del DOM y constantes para configurar el juego:

- `btnReglas`, `btnCierra`, `reglas`: Elementos para mostrar y cerrar las reglas del juego.
- `canvas`, `ctx`: Contexto del lienzo para dibujar el juego.
- `menuPausa`: Elemento para mostrar el menú de pausa.
- `bolaColorElegido`, `paletaColorElegido`: Elementos de entrada para seleccionar colores de bola y paleta.
- `popups`, `increasePopup`, `decreasePopup`, `speedPopup`, `speedText`, `speedPopupChild`: Elementos para mostrar mensajes emergentes.

## Constantes

Se definen varias constantes que controlan diferentes aspectos del juego, como la velocidad de la bola y la paleta, la cantidad de bloques, los retrasos y las probabilidades de aparición de power-ups.

## Variables

El juego hace uso de varias variables para rastrear la puntuación, el estado del juego, los colores y el control de eventos de teclado.

## Objetos

- **Bola**: Representa la bola del juego con propiedades como posición, tamaño, velocidad y color.
- **Paleta**: Representa la paleta controlada por el jugador con propiedades similares a la bola.
- **Bloque Individual (iBloque)**: Define las propiedades de un bloque individual, como ancho, alto y visibilidad.
- **Patrones de Bloques (patronesBloques)**: Matriz que define los patrones de instanciación de bloques en el juego.

## Funciones Principales

- `dibujaBola()`, `dibujaPaleta()`, `dibujaPuntuacion()`, `dibujaMuro()`: Funciones para dibujar la bola, la paleta, la puntuación y los bloques en el lienzo.
- `muevePaleta()`, `mueveBola()`: Funciones para mover la paleta y la bola en respuesta a la entrada del jugador.
- `actualizaPuntuacion()`, `reiniciaMuro()`: Funciones para actualizar la puntuación y reiniciar todos los bloques cuando se reinicia el juego.
- `dibujaTodo()`, `ResetGame()`, `update()`: Funciones para dibujar todos los elementos en el lienzo, reiniciar el juego y actualizar el estado del juego en cada fotograma.

## Funciones Auxiliares

- `colorAleatorio()`, `setColorBola()`, `setColorPaleta()`: Funciones para generar colores aleatorios y establecer el color de la bola y la paleta.
- `setBloquePowerup()`, `setBloqueSpeedup()`, `manejarColisionConBloque()`: Funciones relacionadas con la gestión de power-ups y la lógica de colisión con bloques.
- `ampliarPaleta()`, `variaColorSpeedup()`, `reducirPaleta()`: Funciones para manejar power-ups específicos y ajustar el tamaño y la velocidad de la paleta.

## Creación de Bloques

- `crearConjuntoBloques()`, `crearPatronBloques()`: Funciones para crear conjuntos de bloques siguiendo un patrón predefinido.

## Eventos y Control de Teclado

El juego maneja eventos de teclado para mover la paleta y pausar el juego. También utiliza eventos DOM para mostrar y ocultar reglas y mensajes emergentes.

---

El archivo HTML proporciona la estructura de la interfaz de usuario del juego y hace referencia al archivo JavaScript para la lógica del juego. El archivo CSS proporciona estilos para la apariencia del juego.
