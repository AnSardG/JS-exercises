//REFERENCIAS
const btnReglas = document.getElementById("btn-reglas");
const btnCierra = document.getElementById("btn-cerrar");
const reglas = document.getElementById("reglas");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const menuPausa = document.getElementById("pausa");
const bolaColorElegido = document.getElementById("bola-color-elegido");
const paletaColorElegido = document.getElementById("paleta-color-elegido");
const popups = document.getElementById("popups");
const increasePopup = document.getElementById("increase-popup");
const decreasePopup = document.getElementById("decrease-popup");
const speedPopup = document.getElementById("speed-popup");
const speedText = document.getElementById("speed-text");
const speedPopupChild = document.getElementById("speed-popup-child")

//CONSTANTES
const BOLA_VELOCIDAD = 4;
const BOLA_DX = 4;
const BOLA_DY = -4;
const BOLA_X = canvas.width / 2;
const BOLA_Y = canvas.height - 30;
const BOLA_MAX_SPEED = BOLA_VELOCIDAD + 4;

const PALETA_X = canvas.width / 2 - 40;
const PALETA_Y = canvas.height - 20;
const PALETA_W = 80;
const PALETA_H = 10;
const PALETA_VELOCIDAD = 6;

const nColumnasBloques = 9;
const nFilasBloques = 5;
const delay = 1000; //delay para resetear el juego cuando pierdes
const popupDelay = 3000;
const speedPopupDelay = 2000;
const probabilidadPowerup = 15;
const probabilidadSpeedup = 5;
const teclaPausa = "p";
const fpsDelay = 1000 / 60; // Objetivo de 60 fps

//VARIABLES
let puntuacion = 0;
let gameStart = false;
let pausa = false;
let colores = ["#0095dd", "#00dd11", "#dd4700", "#dd0029"];
let speedVariableText = "SPEED x2!";
let lastTime = null;
let accumulatedTime = 0;
let teclasPresionadas = {};

//OBJETOS

// Objeto bola
const bola = {
  x: BOLA_X,
  y: BOLA_Y,
  size: 10,
  velocidad: BOLA_VELOCIDAD,
  dx: BOLA_DX,
  dy: BOLA_DY,
  color: "#0095dd",
  visible: true,
};

// Objeto paleta
const paleta = {
  x: PALETA_X,
  y: PALETA_Y,
  w: PALETA_W,
  h: PALETA_H,
  velocidad: PALETA_VELOCIDAD,
  dx: 0,
  color: "#0095dd",
  estado: 0,
  visible: true,
};

// Objeto Bloque (individual)
const iBloque = {
  w: 70,
  h: 20,
  padding: 10,
  offsetX: 45,
  offsetY: 60,
  visible: true,
};

// Crear conjunto de bloques
const bloques = [];
for (let i = 0; i < nColumnasBloques; i++) {
  bloques[i] = [];
  for (let j = 0; j < nFilasBloques; j++) {
    const x = i * (iBloque.w + iBloque.padding) + iBloque.offsetX;
    const y = j * (iBloque.h + iBloque.padding) + iBloque.offsetY;
    bloques[i][j] = { x, y, color: colorAleatorio(), powerup: setBloquePowerup(), speedup: setBloqueSpeedup(), ...iBloque };
  }
}

// Dibuja la bola
function dibujaBola() {
  ctx.beginPath();
  ctx.arc(bola.x, bola.y, bola.size, 0, Math.PI * 2);
  ctx.fillStyle = bola.visible ? bola.color : "transparent";
  ctx.fill();
  ctx.closePath();
}

// Dibuja la paleta
function dibujaPaleta() {
  ctx.beginPath();
  ctx.rect(paleta.x, paleta.y, paleta.w, paleta.h);
  ctx.fillStyle = paleta.visible ? paleta.color : "transparent";
  ctx.fill();
  ctx.closePath();
}

// Dibuja la puntuación
function dibujaPuntuacion() {
  ctx.font = "20px Arial";
  ctx.fillStyle = "#0095dd";
  ctx.fillText(`Puntos: ${puntuacion}`, canvas.width - 100, 30);
}

// Dibuja los bloques
function dibujaMuro() {
  bloques.forEach((grupo) => {
    grupo.forEach((bloque) => {
      ctx.beginPath();
      ctx.rect(bloque.x, bloque.y, bloque.w, bloque.h);
      ctx.fillStyle = bloque.visible ? bloque.color : "transparent";
      ctx.fill();
      ctx.closePath();
    });
  });
}

// Mover la paleta izquierda y derecha
function muevePaleta() {
  paleta.x += paleta.dx;

  // Wall detection
  if (paleta.x + paleta.w > canvas.width) {
    paleta.x = canvas.width - paleta.w;
  }

  if (paleta.x < 0) {
    paleta.x = 0;
  }
}

// Mueve la bola por el canvas
function mueveBola() {
  bola.x += bola.dx;
  bola.y += bola.dy;

  // Colisión con paredes izquierda o derecha
  if (bola.x + bola.size > canvas.width || bola.x - bola.size < 0) {
    bola.dx *= -1; // rebote de 45º
  }

  // Colisión con paredes superior o inferior
  if (bola.y - bola.size < 0) {
    bola.dy = Math.abs(bola.dy); // Rebote hacia abajo
  } else if (bola.y + bola.size > canvas.height) {
    reiniciaMuro();
  }

  // Colisión con la paleta
  if (
    bola.x - bola.size > paleta.x &&
    bola.x + bola.size < paleta.x + paleta.w &&
    bola.y + bola.size > paleta.y
  ) {
    bola.dy = -bola.velocidad;
  }

  // colisión con un bloque
  bloques.forEach(grupo => {
    grupo.forEach(bloque => {
      if (bloque.visible) {
        if (
          bola.x - bola.size > bloque.x && // Chequeo de colisión por la izquierda
          bola.x + bola.size < bloque.x + bloque.w && // Chequeo de colisión por la derecha
          bola.y + bola.size > bloque.y && // Chequeo de colisión por arriba
          bola.y - bola.size < bloque.y + bloque.h // Chequeo de colisión por abajo
        ) {
          manejarColisionConBloque(bloque);
        }
      }
    });
  });

  // La paleta no golpea - Pierdes
  if (bola.y + bola.size > canvas.height) {
    reiniciaMuro();
  }
}

// Actualiza puntuacion
function actualizaPuntuacion() {
  puntuacion++;

  if (puntuacion % (nFilasBloques * nColumnasBloques) === 0) {

    bola.visible = false;
    paleta.visible = false;

    //After 0.5 sec restart the game
    setTimeout(function () {
      ResetGame();
      puntuacion = 0;
      bola.visible = true;
      paleta.visible = true;
    }, delay)
  }
}

// Make all bloques appear
function reiniciaMuro() {
  bloques.forEach(grupo => {
    grupo.forEach(bloque => (bloque.visible = true));
  });
  ResetGame();

}

// Dibujar el canvas
function dibujaTodo() {
  // limpiar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  dibujaBola();
  dibujaPaleta();
  dibujaPuntuacion();
  dibujaMuro();
}

//Reiniciamos la partida moviendo la bola y la paleta al punto inicial.
function ResetGame() {
  puntuacion = 0;
  gameStart = false;

  bola.x = BOLA_X;
  bola.y = BOLA_Y;
  bola.velocidad = BOLA_VELOCIDAD;
  bola.dx = BOLA_DX;
  bola.dy = BOLA_DY;

  paleta.x = PALETA_X;
  paleta.y = PALETA_Y;
  paleta.w = PALETA_W;
  paleta.h = PALETA_H;
  paleta.velocidad = PALETA_VELOCIDAD;

  bloques.forEach(grupo => {
    grupo.forEach(bloque => {
      bloque.visible = true;
    });
  });

  speedVariableText = "SPEED x1";

  dibujaTodo();
}

// Actualiza el canvas y las posiciones de los objetos
function update() {
  const currentTime = performance.now(); // Obtiene el tiempo actual con alta precisión

  if (lastTime === null) {
    lastTime = currentTime;
  }

  const deltaTime = currentTime - lastTime;
  accumulatedTime += deltaTime;

  // Hacer ajustes basados en el tiempo acumulado
  while (accumulatedTime > fpsDelay) {
    // Lógica del juego para cada fotograma
    if (gameStart && !pausa) {
      muevePaleta();
      mueveBola();
    }

    // Actualiza el tiempo acumulado
    accumulatedTime -= fpsDelay;
  }

  // Llamada para dibujar el canvas
  dibujaTodo();

  // Llamada a requestAnimationFrame para el siguiente fotograma
  requestAnimationFrame(update);

  // Actualiza el tiempo del último fotograma
  lastTime = currentTime;
}

// Iniciar el bucle recursivo update
requestAnimationFrame(update);

function colorAleatorio() {
  return colores[Math.floor(Math.random() * colores.length)];
}

function setColorBola() {
  bola.color = bolaColorElegido.value;
}

function setColorPaleta() {
  paleta.color = paletaColorElegido.value;
}

function setBloquePowerup() {
  let powerup = 0;
  if (Math.floor(Math.random() * 100) < probabilidadPowerup) {
    do {
      powerup = Math.floor(Math.random() * 3) - 1;
    } while (powerup == 0);
  }
  return powerup;
}

function setBloqueSpeedup() {
  let speedup = false;
  if (Math.floor(Math.random() * 100) < probabilidadSpeedup) {
    speedup = true;
  }
  return speedup;
}

function manejarColisionConBloque(bloque) {
  bola.dy *= -1; // Rebota con 45º
  bloque.visible = false; // El bloque desaparece

  actualizaPuntuacion();

  // Manejar el power-up del bloque
  if (bloque.powerup > 0) {
    ampliarPaleta();
  } else if (bloque.powerup < 0) {
    reducirPaleta();
  }

  if (bloque.speedup && bola.velocidad < BOLA_MAX_SPEED) {
    speedVariableText = speedVariableText.slice(0, 6) + "x" + (bola.velocidad - 2);
    for (let index = 0; index < bola.velocidad - 2; index++) {
      speedVariableText += "!";
    }

    muestraMensaje("speed");
    
    bola.dx = bola.dx < 0 ? bola.dx - 1 : bola.dx + 1;
    bola.dy = bola.dy < 0 ? bola.dy - 1 : bola.dy + 1;
    bola.velocidad = bola.velocidad + 1;
  }
}

function ampliarPaleta() {
  if (paleta.w < PALETA_W + 40) {
    paleta.w = PALETA_W + 40;
    paleta.h = PALETA_H + 10;
    paleta.velocidad = PALETA_VELOCIDAD - 2;
    paleta.y = PALETA_Y - 10;
    paleta.x -= 20;

    if (paleta.estado < 1) {
      muestraMensaje("increase");
      paleta.estado = 1;
    }
  }
}

function reducirPaleta() {
  if (paleta.w > PALETA_W - 20) {
    paleta.w = PALETA_W - 20;
    paleta.h = PALETA_H - 2;
    paleta.velocidad = PALETA_VELOCIDAD + 2;
    paleta.x += 10;
    paleta.y = PALETA_Y - 5;

    if (paleta.estado > -1) {
      muestraMensaje("decrease");
      paleta.estado = -1;
    }
  }
}

function muestraMensaje(tipo) {

  switch (tipo) {
    case "increase":
      popups.classList.add("mostrar");
      increasePopup.classList.add("mostrar");
      setTimeout(function () {
        increasePopup.classList.remove("mostrar");
        popups.classList.remove("mostrar");
      }, popupDelay);
      break;
    case "decrease":
      popups.classList.add("mostrar");
      decreasePopup.classList.add("mostrar");
      setTimeout(function () {
        decreasePopup.classList.remove("mostrar");
        popups.classList.remove("mostrar");
      }, popupDelay);
      break;
    case "pausa":
      if (pausa) {
        menuPausa.classList.add('mostrar');
      } else {
        menuPausa.classList.remove('mostrar');
      }
      break;
    case "speed":
      speedText.innerHTML = speedVariableText;
      speedPopup.classList.add("mostrar");
      speedPopupChild.classList.add("mostrar");
      setTimeout(function () {
        speedPopup.classList.remove("mostrar");
        speedPopupChild.classList.remove("mostrar");
      }, speedPopupDelay);
  }
}

// Keyup event
function keyUp(e) {
  if (e.key === "Right" || e.key === "ArrowRight" || e.key === "Left" || e.key === "ArrowLeft") {
    teclasPresionadas[e.key] = false;

    // Establecer paleta.dx según las teclas que estén actualmente presionadas
    if (teclasPresionadas["ArrowRight"]) {
      paleta.dx = paleta.velocidad;
    } else if (teclasPresionadas["ArrowLeft"]) {
      paleta.dx = -paleta.velocidad;
    } else {
      paleta.dx = 0;
    }
  }
}

// Keydown event
function keyDown(e) {
  if (e.key === "Right" || e.key === "ArrowRight") {
    paleta.dx = paleta.velocidad;
    teclasPresionadas[e.key] = true;
  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    paleta.dx = -paleta.velocidad;
    teclasPresionadas[e.key] = true;
  }

  if (e.key === teclaPausa) {
    pausa = !pausa;
    muestraMensaje("pausa");
  }

  if (!gameStart) {
    gameStart = true;
  }
}

// Keyboard event handlers
document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);

// Muestra reglas
btnReglas.addEventListener('click', () => reglas.classList.add('mostrar'));
btnCierra.addEventListener('click', () => reglas.classList.remove('mostrar'));
bolaColorElegido.addEventListener("change", () => setColorBola());
paletaColorElegido.addEventListener("change", () => setColorPaleta());