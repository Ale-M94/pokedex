const pokeApi = 'https://pokeapi.co/api/v2/pokemon/';
const $listaPokemon = document.querySelector('#boton-lista-completa');
const $buscarPorNombre= document.querySelector('#boton-buscar-nombre');
const $buscarPorNumero = document.querySelector('#boton-buscar-numero');
const tablaPokemones = document.querySelector('#tabla-pokemones');
const listaPokemones = document.querySelector('#lista-pokemones');
const $siguiente = document.querySelector('#boton-siguiente');
const $anterior = document.querySelector('#boton-anterior');

let paginaActual = 1;
const limitePorPagina = 20;

function obtenerListaPokemon(url){
    fetch(url)
    .then(response => response.json())
    .then(responseJSON => {
        listaPokemones.innerHTML = '';

        responseJSON.results.forEach((pokemon, index) =>{
            const numeroPokemon = (paginaActual - 1) * limitePorPagina + (index + 1);
            const fila = document.createElement('tr');
            const celdaNumero = document.createElement('td');
            const celdaNombre = document.createElement('td');

            celdaNumero.textContent = numeroPokemon;
            fila.appendChild(celdaNumero);

            celdaNombre.textContent = pokemon.name;
            fila.appendChild(celdaNombre);

            fila.value = pokemon.url;

            listaPokemones.appendChild(fila);
        });

        if (responseJSON.next) {
            $siguiente.style.visibility = 'visible';
            $siguiente.onclick = function () {
                paginaActual++;
                obtenerListaPokemon(responseJSON.next);
            };
        } else {
            $siguiente.style.visibility = 'hidden';
        };

        if (responseJSON.previous) {
            $anterior.style.visibility = 'visible';
            $anterior.onclick = function () {
                paginaActual--;
                obtenerListaPokemon(responseJSON.previous);
            };
        } else {
            $anterior.style.visibility = 'hidden';
        }

    })

    .catch(error => console.error('No se pudo obtener la lista de Pokemones', error));
}



$listaPokemon.onclick = function(){
    tablaPokemones.style.visibility = 'visible';
    obtenerListaPokemon(pokeApi);
};



