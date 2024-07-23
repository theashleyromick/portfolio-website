let pokemonList = [
    { name: 'Squirtle', height: '0.5', type: 'Water'},
    { name: 'Charmander', height: '0.6', type: 'Fire'},
    { name: 'Pikachu', height: '0.7', type: 'Electric'}
];

// Flag to ensure only one Pokemon gets the "Wow, that's big!" label
let bigPokemonFlag = false;

pokemonList.forEach(function(pokemon) {
    console.log(pokemon.name + ' is ' + pokemon.height + ' meters tall and is a ' + pokemon.type + ' type Pokemon!');
    if (parseFloat(pokemon.height) > 0.6 && !bigPokemonFlag) {
        document.write(pokemon.name + ': ' + pokemon.height + ' - ' + pokemon.type + ' - Wow, that\'s big!<br>');
        bigPokemonFlag = true;
    } else {
        document.write(pokemon.name + ': ' + pokemon.height + ' - ' + pokemon.type + '<br>');
    }
});