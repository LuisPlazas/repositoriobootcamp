let btnN=document.querySelector("#btnNext")
let btnP=document.querySelector("#btnPrev")
let url_Api="https://pokeapi.co/api/v2/pokemon"




btnN.addEventListener("click",function(){
    let lista=document.querySelector("#grilla-personajes");
    lista.innerHTML="";
    let dataApi= fetch(url_Api)
    dataApi.then(respuesta=>respuesta.json())
        .then(info_json=>{
            url_Api=info_json.next
            info_json.results.forEach(poke => {
                var img = poke.url
                let infoPoke = fetch(img)
                infoPoke.then (Pokeimg=>Pokeimg.json())
                    .then(img =>{
                        lista.innerHTML +=`
                        <div class="col">
                            <div class="card">
                                <img src="${img.sprites.other.home.front_default}"  alt="">
                                <div  class="card-body">
                                    <h5 class="card-title">Nombre:${poke.name}</h5>
                                    <spam>Move:${img.moves[1].move.name}</spam>
                                    <ul>
                                        <li class="d-flex justify-content-around align-items-center">
                                            <div id="grilla-personajes"></div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        `
                    })
                
            });
        })
})

btnP.addEventListener("click",function(){
    let lista=document.querySelector("#grilla-personajes");
    lista.innerHTML="";
    let dataApi= fetch(url_Api)
    dataApi.then(respuesta=>respuesta.json())
        .then(info_json=>{
            url_Api=info_json.previous
            info_json.results.forEach(poke => {
                var img = poke.url
                let infoPoke = fetch(img)
                infoPoke.then (Pokeimg=>Pokeimg.json())
                    .then(img =>{
                        lista.innerHTML +=`
                        <div class="col">
                            <div class="card">
                                <img src="${img.sprites.other.home.front_default}"  alt="">
                                <div  class="card-body">
                                    <h5 class="card-title">Nombre:${poke.name}</h5>
                                    <spam>Move:${img.moves[1].move.name}</spam>
                                    <ul>
                                        <li class="d-flex justify-content-around align-items-center">
                                            <div id="grilla-personajes"></div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        `
                    })
                
            });
        })
})