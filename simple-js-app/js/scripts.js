let pokemonList = [
    { name: 'Squirtle', height: '0.5 m', type: 'Water'},
    { name: 'Charmander', height: '0.6 m', type: 'Fire'},
    { name: 'Pikachu', height: '0.7 m', type: 'Electric'}
];

//Flag to ensure only one Pokemon gets the "Wow, That;s big!" label
let bigPokemonFlag = false;

for (let i = 0; i < pokemonList.length; i++) {
    let type = pokemonList[i].type;
    let name = pokemonList[i].name;
    let height = pokemonList[i].height;
      if (parseFloat (height) > 0.6 && ! bigPokemonFlag) {
        document.write(name + ': ' + height + ' - ' +type + '- Wow, that\'s big!<br>')
        bigPokemonFlag = true;
      } else {
        document.write (name + ': ' + height + ' - ' + type + '<br>');
      }
    }

