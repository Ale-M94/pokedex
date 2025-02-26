import { mostrarCartaPokemon } from "./carta-pokemon.js";

export function mostrarListadoPokemones(pokemones) {

    pokemones.forEach((pokemon) => {
        const $listado = document.querySelector('#listado-pokemones');
        const { name: nombre, url, } = pokemon;

        const $link = document.createElement('a');
        $link.className = "list-group-item list-group-item-action";
        $link.setAttribute('href', '#');
        $link.textContent = nombre;
        $link.addEventListener('click', () => {
            document.querySelector('#tarjeta-pokemon').classList.remove('d-none');
            mostrarCartaPokemon(url);
        })

        $listado.appendChild($link);
    });
};
