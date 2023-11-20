const pokemonImage = document.querySelector('.pokemon');
const pokemonName = document.querySelector('.pokemon__name');
const nextButton = document.querySelector('.button_next');
const prevButton = document.querySelector('.button_prev');
const searchName = document.querySelector('.input_text');
const searchId = document.querySelector('.input_number');
const findButton = document.querySelector('.button_find');

let namePokemon = '';
let idPokemon = Math.floor(Math.random() * 1292)

nextButton.addEventListener('click', () => {
  idPokemon = parseInt(idPokemon) + 1;
  console.log(idPokemon);
  findById(idPokemon);
});

prevButton.addEventListener('click', () => {
  idPokemon = parseInt(idPokemon) - 1;
  console.log(idPokemon);
  findById(idPokemon);
});

findButton.addEventListener('click', () => {
  if (searchName.value !== '') {
    namePokemon = searchName.value;
    console.log(searchName.value);
    findByName(namePokemon);
    resetInputs();
  } else {
    idPokemon = searchId.value;
    console.log(searchId.value);
    findById(idPokemon);
    resetInputs();
  }
});

function findByName(name) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      idPokemon = res.id;
      pokemonImage.src = res.sprites.front_default;
      pokemonName.textContent = res.name;
    })
    .catch((res) => console.log(res));
}

function findById(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      pokemonImage.src = res.sprites.front_default;
      pokemonName.textContent = res.name;
    })
    .catch((res) => console.log(res));
}

function findRandom(){
  console.log(idPokemon)
  fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
  .then((res) => res.json())
    .then((res) => {
      console.log(res);
      pokemonImage.src = res.sprites.front_default;
      pokemonName.textContent = res.name;
    })
    .catch((res) => console.log(res));
}

window.onload = findRandom()

function resetInputs() {
  searchName.value = '';
  searchId.value = '';
}
