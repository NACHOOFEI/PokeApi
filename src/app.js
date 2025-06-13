const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

function createCardError(msg) {
  const cardHTML = `
    <div class="card">
      <h1>${msg}</h1>
    </div>`;
  main.innerHTML = cardHTML;
}

function CreateCardUser(user) {
  const pokemonName = user.name;
  const img = user.sprites.front_default || 'https://via.placeholder.com/100?text=Sin+imagen';
  const CardUserHTML = `
    <div class="card">
      <div>
        <img src="${img}" class="img">
      </div>
      <div class="user-info">
        <h2>${pokemonName}</h2>
      </div>
    </div>`;
  main.innerHTML += CardUserHTML; 
}

async function getUsers(pokemoname) {
  main.innerHTML = ""; 

  try {
    if (!pokemoname) {

      const res = await fetch(apiUrl + '?limit=151');
      const data = await res.json();

      const promises = data.results.map(async (poke) => {
        const detalleRes = await fetch(poke.url);
        const detalle = await detalleRes.json();
        CreateCardUser(detalle);
      });

      await Promise.all(promises); 
    } else {

      const response = await fetch(apiUrl + pokemoname.toLowerCase());

      if (!response.ok) {
        createCardError("Pokémon no encontrado.");
        return;
      }

      const data = await response.json();
      CreateCardUser(data);
    }
  } catch (e) {
    console.log(e);
    createCardError("Ocurrió un error al buscar el Pokémon.");
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = search.value.trim();
  getUsers(user); 
});
