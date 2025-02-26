import { mostrarListadoPokemones } from "./listado.js";
import { mostrarTotalPokemones } from "./general.js";
import { crearPaginador } from "./paginador.js";


export async function obtenerPokemones() {
    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
    const r = await respuesta.json();

    const { count: totalPokemones, results: pokemones } = r;
    mostrarTotalPokemones(totalPokemones);
    mostrarListadoPokemones(pokemones);
    crearPaginador(totalPokemones);
};

