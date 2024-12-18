const pokeApi = 'https://pokeapi.co/api/v2/pokemon/';

const $listaPokemon = document.querySelector('#boton-lista-completa');

const valorNombre = document.querySelector('#nombre-pokemon');
const $buscarPorNombre= document.querySelector('#boton-buscar-nombre');

const valorNumero = document.querySelector('#numero-pokemon');
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
            $siguiente.classList.remove('d-none');
            $siguiente.onclick = function () {
                paginaActual++;
                obtenerListaPokemon(responseJSON.next);
            };
        } else {
            $siguiente.classList.add('d-none');
        };

        if (responseJSON.previous) {
            $anterior.classList.remove('d-none');

            $anterior.onclick = function () {
                paginaActual--;
                obtenerListaPokemon(responseJSON.previous);
            };
        } else {
            $anterior.classList.add('d-none');
        }

    })

    .catch(error => console.error('No se pudo obtener la lista de Pokemones', error));
}



$listaPokemon.onclick = function(){
    tablaPokemones.classList.remove('d-none');
    obtenerListaPokemon(pokeApi);
};

$buscarPorNombre.onclick = function(event){
    event.preventDefault;

    if(valorNombre.value === ''){
        alert('Ingrese un nombre');
        return;
    };

    let nombreCorregido = valorNombre.value.toLowerCase()

    
    fetch(`https://pokeapi.co/api/v2/pokemon/${nombreCorregido}`)
    .then(response => response.json())
    .then(responseJSON =>{
        document.querySelector('#tarjeta-pokemon').classList.remove('d-none')
        const tipos = responseJSON.types.map(tipos => tipos.type.name)

        document.querySelector('.card-title').innerHTML = responseJSON.species.name
        document.querySelector('.card-text').innerHTML = `Número: ${responseJSON.id}<br>
        Tipos: ${tipos.join(', ')}<br>
        Altura: ${responseJSON.height}<br>
        Peso: ${responseJSON.weight}`
        document.querySelector('#imagen-pokemon').src = responseJSON.sprites.front_default

    })

    .catch(error => console.error('El nombre ingresado no es válido', error))
}

