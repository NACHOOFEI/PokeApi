# PokeApi

# 🔍 Buscador de Pokémon Futurista

Este proyecto es una aplicación web interactiva que permite buscar Pokémon por nombre y, si no se ingresa ninguno, muestra los primeros 151 Pokémon de la PokéAPI. La interfaz está diseñada con un estilo futurista inspirado en neón y cyberpunk.

## 🚀 Tecnologías usadas

- HTML5
- CSS3 (diseño futurista con efecto neón)
- JavaScript (Vanilla JS)
- [PokéAPI](https://pokeapi.co/) (para obtener los datos de los Pokémon)

## 🎮 Funcionalidad

- El usuario puede buscar un Pokémon ingresando su nombre y presionando Enter.
- Si no se escribe nada y se envía el formulario, se muestran los primeros 151 Pokémon automáticamente.
- Cada Pokémon se muestra en una tarjeta con su imagen y nombre.
- Si el nombre ingresado no existe, se muestra un mensaje de error.
- Estilo visual atractivo y moderno.

## 📸 Captura

![Captura de pantalla del proyecto](./screenshot.png)

## 🧠 Lógica del funcionamiento

- Se usa un `<form>` con un input de tipo search.
- Al enviar el formulario:
  - Si el input está vacío, se hace una petición a `https://pokeapi.co/api/v2/pokemon?limit=151` para obtener los primeros Pokémon.
  - Si hay texto, se busca ese Pokémon en particular (`https://pokeapi.co/api/v2/pokemon/{nombre}`).
- Se muestra una tarjeta por cada Pokémon, con imagen y nombre.
- Se utiliza `fetch` para hacer las solicitudes HTTP a la API.
- Las tarjetas se agregan dinámicamente al `<main>` del HTML.

## 📂 Estructura del proyecto

