// import {
//     obtenerListaPokemon,
//     buscarPorNombre,
//     buscarPorNumero,
// } from './ui.js';
// import { pokeApi } from './pokedex.js';

function iniciar() {
    obtenerPokemones();
};

iniciar();

function mostrarTotalPokemones(totalPokemones) {
    document.querySelector('#total-pokemones').textContent = totalPokemones;
};

function obtenerPokemones() {
    fetch(`https://pokeapi.co/api/v2/pokemon/`).then((r) => r.json()).then((r) => {
        console.log(r);
        const { count: totalPokemones, results: pokemones } = r;
        mostrarTotalPokemones(totalPokemones);
        mostrarListadoPokemones(pokemones);
    })
};

function mostrarListadoPokemones(pokemones) {
    pokemones.forEach((pokemon) => {
        const { name: nombre, url, sprites: imagen } = pokemon;
        const $listado = document.querySelector('#listado-pokemones');
        // const $imagenPokemon = document.querySelector('#imagen-pokemon');

        const $link = document.createElement('a');
        $link.className = "list-group-item list-group-item-action";
        $link.setAttribute('href', '#');
        $link.textContent = nombre;
        $link.addEventListener('click', () => {
            // trabajar con async await            
            console.log(`buscar data en ${url}`)
        })

        $listado.appendChild($link);
    });
};

function mostrarCartaPokemon(){
    
}
