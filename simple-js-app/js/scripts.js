let pokemonList = [
    { name: 'Squirtle', height: '0.5 m', type: 'Water'},
    { name: 'Charmander', height: '0.6 m', type: 'Fire'},
    { name: 'Pikachu', height: '0.7 m', type: 'Electric'}
];

pokemonList.forEach(function(pokemon) {
    console.log(pokemon.name + ' is ') + pokemon.height + ' meters tall ' + pokemon.type + ' and is this type pg Pokemon!'
});

//Flag to ensure only one Pokemon gets the "Wow, That;s big!" label
let bigPokemonFlag = false;