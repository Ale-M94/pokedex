import { cargarPokemones, 
    actualizarPaginador, 
    POKE_API, 
    POKEMONES_POR_PAGINA } from "../utilidades/utilidades.js";

function crearItemPaginador(texto, url = '#') {
    const $item = document.createElement('li');
    const $link = document.createElement('a');

    $item.className = 'page-item';
    $link.className = 'page-link';
    $link.textContent = texto;
    $link.href = url;
    $link.dataset.page = texto;
    $link.addEventListener('click', (e) => {
        e.preventDefault();
        const numeroPagina = parseInt(e.target.dataset.page, 10);

        if(isNaN(numeroPagina)) return;

        cargarPokemones(numeroPagina);
    })

    $item.appendChild($link);
    return $item;
};

export function crearPaginador(totalPokemones) {
    const $paginador = document.querySelector('#paginador');
    const totalPaginas = Math.ceil(totalPokemones / POKEMONES_POR_PAGINA);

    const $paginaAnterior = crearItemPaginador('Anterior');
    $paginador.appendChild($paginaAnterior);
    

    for (let i = 0; i < totalPaginas; i++) {
        const numeroPagina = i + 1;
        const url = `${POKE_API}?offset=${i * 20}&limit=20`;
        const $pagina = crearItemPaginador(numeroPagina, url);

        $paginador.appendChild($pagina);
    }

    const $paginaSiguiente = crearItemPaginador('Siguiente');
    $paginador.appendChild($paginaSiguiente);

    actualizarPaginador(totalPaginas);
};



