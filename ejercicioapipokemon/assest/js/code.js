let divGrillaPagina = document.querySelector('#grilla-personajes')
let contenedorBotones = document.querySelector(`#contenedorBotones`)
let btnP = document.querySelector(`#btnPrev`)
let btnN = document.querySelector(`#btnNext`)

btnP.setAttribute(`data-paginaAnterior`,null)
btnN.setAttribute(`data-paginaSiguiente`,`https://pokeapi.co/api/v2/pokemon?offset=20&limit=20`)

btnP.addEventListener("click",(e)=>{
    url_api = e.target.getAtribute("data-paginaAnterior")
    if(url_api != "null"){
        obtenerPokemones(url_api)
    }
})

btnN.addEventListener("click",(e)=>{
    console.log(e)
    url_api = e.target.getAtribute("data-paginaSiguiente")
    if(url_api != "null"){
        obtenerPokemones(url_api)
    }
})


async function obtenerPokemones(url_api = 'https://pokeapi.co/api/v2/pokemon') {
divGrillaPagina.innerHTML = ""

let dataAPI = await fetch(url_api)
let infoPokemon = await dataAPI.json()
let arrPokemones = infoPokemon.results




    for (const pokemon of arrPokemones) {
        let info = await fetch(pokemon.url)
        let pokemonInformacion = await info.json()


        let liTipos = ''
        pokemonInformacion.types.forEach(dataTipo => {
            liTipos += `<li>${dataTipo.type.name}</li>`
        });

        let barrasEstadisticas = ''
        pokemonInformacion.stats.forEach(dataStats => {
            if (dataStats.stat.name == 'hp') {
                barrasEstadisticas += `<div> vida: <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="${dataStats.base_stat}" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-warning" style="width: ${dataStats.base_stat}%">${dataStats.base_stat}/100</div></div>`
            } else if (dataStats.stat.name == 'attack') {
                barrasEstadisticas += `<div> ataque: <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="${dataStats.base_stat}" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-danger" style="width: ${dataStats.base_stat}%">${dataStats.base_stat}/100</div></div>`
            } else if (dataStats.stat.name == 'defense') {
                barrasEstadisticas += `<div> defensa: <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="${dataStats.base_stat}" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-primary" style="width: ${dataStats.base_stat}%">${dataStats.base_stat}/100</div></div>`
            }
        })


        divGrillaPagina.innerHTML += `
        <div class="col">
            <div class="card">


            <div id="carruselPokemo_${pokemonInformacion.id}" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="${pokemonInformacion.sprites.other["official-artwork"].front_default}" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="${pokemonInformacion.sprites.other.home.front_default}" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="${pokemonInformacion.sprites.other.home.front_shiny}" class="d-block w-100" alt="...">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carruselPokemo_${pokemonInformacion.id}" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carruselPokemo_${pokemonInformacion.id}" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <div class="card-body">
                <h5 class="card-title">${pokemonInformacion.name}</h5>
                <ul>
                    ${liTipos}
                </ul> 
            </div>

            <div class="px-3 pb-4">
                ${barrasEstadisticas}
            </div>

            </div>
        </div>
        `
    }

    btnP.setAttribute("data-paginaAnterior",infoPokemon.previous)
    btnN.setAttribute("data-paginaSiguiente",infoPokemon.next)
}


obtenerPokemones()
