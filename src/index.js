const pokeApi = fetch('https://pokeapi.co/api/v2/pokemon');
const tablaPokemones = document.querySelector('#lista-pokemones');


pokeApi
    .then(response => response.json())
    .then(responseJSON => {
        responseJSON.results.forEach((pokemon, index) =>{
            const numeroPokemon = index + 1;
            const fila = document.createElement('tr');
            const celdaNumero = document.createElement('td');
            const celdaNombre = document.createElement('td');

            celdaNumero.textContent = numeroPokemon;
            fila.appendChild(celdaNumero);

            celdaNombre.textContent = pokemon.name;
            fila.appendChild(celdaNombre);

            tablaPokemones.appendChild(fila);
        })
    })

