# Formulario multipaso con control de errores

Este proyecto consiste en un formulario de varias etapas implementado en HTML5, CSS3 y JavaScript. El formulario está diseñado para recopilar información del usuario en varias etapas, con validación de campos en cada paso y control de errores.

## Estructura del proyecto

El proyecto consta de tres archivos principales:

- **index.html**: Contiene la estructura del formulario, dividido en varios pasos representados por elementos `<div>` con la clase `paso`. Cada paso contiene campos de entrada para diferentes datos del usuario, botones de navegación entre pasos y una barra de progreso para indicar el avance en el formulario.

- **styles.css**: Define los estilos CSS para dar formato al formulario y a los mensajes de error.

- **main.js**: Contiene la lógica JavaScript para validar los campos del formulario, avanzar o retroceder entre pasos y mostrar un mensaje emergente al finalizar el formulario.

## Funciones principales

### `actualizarBarraDeProgreso()`

Esta función se encarga de actualizar la barra de progreso del formulario, calculando el porcentaje completado en función del paso actual y el total de pasos.

### `siguientePaso()`

Valida los campos del paso actual antes de avanzar al siguiente paso. Si los campos son válidos, oculta el paso actual y muestra el siguiente paso.

### `pasoAnterior()`

Permite retroceder al paso anterior del formulario, ocultando el paso actual y mostrando el paso anterior.

### `validarCampos()`

Valida los campos del paso actual del formulario. Realiza diferentes validaciones según el tipo de campo (nombre, usuario, contraseña, etc.) y muestra mensajes de error si los campos no son válidos.

### `openPopup()`

Muestra el mensaje emergente al finalizar el formulario, indicando que los datos se han enviado satisfactoriamente.

### `closePopup()`

Cierra el mensaje emergente y recarga la página después de medio segundo tras finalizar el formulario.

## Funciones auxiliares

### `togglePasswordVisibility(id)`

Alterna la visibilidad de la contraseña en los campos de contraseña y repetir contraseña cuando el usuario hace clic en el icono de ojo.

### `validarCampo(campo, valido, mensajeError)`

Actualiza la apariencia del campo según su validez y muestra un mensaje de error si el campo no es válido.

## Estructura del código

El código JavaScript está organizado por segmentos (constantes y variables, funciones y eventListeners) en una estructura modular que incluye funciones para validar campos, controlar la navegación entre pasos y mostrar mensajes emergentes. Se utilizan funciones eventListener para detectar la interacción del usuario y ejecutar las acciones correspondientes. Las funciones están comentadas para facilitar su comprensión y mantenimiento.

El formulario está dividido en pasos, cada uno contenido en un elemento `<div>` con la clase `paso`. Las clases CSS se utilizan para dar formato al formulario y resaltar los campos inválidos. Se hace uso de bibliotecas externas como Bootstrap y Font Awesome para mejorar la apariencia y la funcionalidad del formulario.
