export async function mostrarCartaPokemon(url) {
    const $imagenPokemon = document.querySelector('#imagen-pokemon');
    const $nombrePokemon = document.querySelector('#nombre-pokemon');
    const $tiposPokemon = document.querySelector('#tipos-pokemon');

    const respuesta = await fetch(url);
    const r = await respuesta.json();

    const { sprites: { front_default: imagen },
        name: nombre,
        types: tipos,
        height: altura,
        weight: peso } = r;

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

    document.querySelector('#altura-pokemon').textContent = ` ${altura}`;
    document.querySelector('#peso-pokemon').textContent = ` ${peso}`;
};
