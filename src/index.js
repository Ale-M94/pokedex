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


// $listaPokemon.onclick = function () {
//     tablaPokemones.classList.remove('d-none');
//     tarjetaPokemones.classList.add('d-none');
//     obtenerListaPokemon(pokeApi);
// };
