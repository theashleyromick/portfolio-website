let pokemonRepository = (function() {
    let pokemonList = [
        { name: 'Squirtle', height: '0.5', type: 'Water'},
        { name: 'Charmander', height: '0.6', type: 'Fire'},
        { name: 'Pikachu', height: '0.7', type: 'Electric'}
    ];

    function getAll () {
      return pokemonList;
    }

    function add(pokemon) {
      pokemonList.push(pokemon);
    }

    return {
      getAll: getAll,
      add: add
    };
})();

let pokemonListElement = document.querySelector('.pokemon-list')

pokemonRepository.getAll().forEach(function(pokemon) {
let listItem = document.createElement('li');

let button = document.createElement('button');
button.innerText = pokemon.name;
button.classList.add('pokemon-button');
listItem.appendChild(button);
pokemonListElement.appendChild(listItem);
});