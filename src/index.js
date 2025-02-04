import {
    obtenerListaPokemon,
    buscarPorNombre,
    buscarPorNumero,
} from './ui.js';
import { pokeApi } from './pokedex.js';

function inicializar() {
    obtenerListaPokemon(pokeApi);
    buscarPorNombre();
    buscarPorNumero();
};

inicializar();
