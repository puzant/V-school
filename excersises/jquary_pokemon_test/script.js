$.get('http://pokeapi.co/api/v2/pokedex/2/', function(data) {
    console.log(data);
  var pokeArr = data.pokemon_entries;
    
    for(var i=0; i<10; i++) {
        $('#pokedex').append('<p>' + pokeArr[i].pokemon_species.name + '</p>');
        $('#pokedex2').append('<p>' + pokeArr[i].pokemon_species.url + '</p>');
        
    }
});