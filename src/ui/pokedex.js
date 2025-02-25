import { mostrarListadoPokemones } from "./listado.js";
import { mostrarTotalPokemones } from "./general.js";

export function obtenerPokemones() {
    fetch(`https://pokeapi.co/api/v2/pokemon/`).then((r) => r.json()).then((r) => {
        const { count: totalPokemones, results: pokemones } = r;
        mostrarTotalPokemones(totalPokemones);
        mostrarListadoPokemones(pokemones);
    })
};

