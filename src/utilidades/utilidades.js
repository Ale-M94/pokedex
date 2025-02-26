import { mostrarListadoPokemones } from "../ui/listado.js";

export const POKEMONES_POR_PAGINA = 20;
export const POKE_API = `https://pokeapi.co/api/v2/pokemon/`;
let paginaActual = 1;

export async function cargarPokemones(numeroPagina) {
    paginaActual = numeroPagina;
    const offset = (numeroPagina - 1) * POKEMONES_POR_PAGINA;
    const url = `${POKE_API}?offset=${offset}&limit=${POKEMONES_POR_PAGINA}`;

    const respuesta = await fetch(url);
    const { results: pokemones } = await respuesta.json();
    document.querySelector('#listado-pokemones').innerHTML = '';

    mostrarListadoPokemones(pokemones);
};


export function actualizarPaginador(totalPaginas) {
    document.querySelectorAll('#paginador .page-link').forEach(($link) => {
        const texto = $link.textContent;

        if (texto === "Anterior") {
            $link.addEventListener('click', (e) => {
                e.preventDefault();
                if (paginaActual > 1) {
                    cargarPokemones(--paginaActual);
                }
            });
        } else if (texto === "Siguiente") {
            $link.addEventListener('click', (e) => {
                e.preventDefault();
                if (paginaActual < totalPaginas) {
                    cargarPokemones(++paginaActual);
                }
            });
        }
    });
}
