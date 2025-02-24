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
        const { count: totalPokemones, results: pokemones } = r;
        mostrarTotalPokemones(totalPokemones);
        mostrarListadoPokemones(pokemones);
    })
};

function mostrarListadoPokemones(pokemones) {
    pokemones.forEach((pokemon) => {
        const { name: nombre, url, } = pokemon;
        const $listado = document.querySelector('#listado-pokemones');

        const $link = document.createElement('a');
        $link.className = "list-group-item list-group-item-action";
        $link.setAttribute('href', '#');
        $link.textContent = nombre;
        $link.addEventListener('click', () => {
            document.querySelector('#tarjeta-pokemon').classList.remove('d-none');
            console.log(`buscar data en ${url}`)
            mostrarCartaPokemon(url);
        })

        $listado.appendChild($link);
    });
};

function mostrarCartaPokemon(url) {
    const $imagenPokemon = document.querySelector('#imagen-pokemon');
    const $nombrePokemon = document.querySelector('#nombre-pokemon');
    const $tiposPokemon = document.querySelector('#tipos-pokemon');

    fetch(url).then((r) => r.json()).then((r) => {
        const { sprites: { front_default: imagen }, name: nombre, types: tipos } = r;

        $imagenPokemon.src = imagen;
        $imagenPokemon.setAttribute('alt', `Imagen frontal del Pokémon ${nombre}`);

        $nombrePokemon.textContent = nombre;

        $tiposPokemon.innerText = '';

        tipos.forEach((tipo) => {
            const $tipoPokemon = document.createElement('span');
            $tipoPokemon.className = `badge ${tipo.type.name}`;
            $tipoPokemon.textContent = tipo.type.name;
            $tiposPokemon.appendChild($tipoPokemon);
        });

    });
};
