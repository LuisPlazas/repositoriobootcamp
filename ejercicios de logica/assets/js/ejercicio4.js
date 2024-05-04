let resultado4 = document.querySelector("#resultado4")
let menu= document.querySelector("#pedido")
let valorPagar=document.querySelector("#pagar")
let listaPedido=document.querySelector("#listaPedido")

let arrayMenu=[
    {
        nombre: "hamburguesa",
        precio:15000,
        cantidad:1
    },
    {
        nombre: "Perro Caliente",
        precio:5000,
        cantidad:1
    },
    {
        nombre: "empanada",
        precio:2000,
        cantidad:1
    }, 
    {
        nombre: "gaseosa",
        precio:1000,
        cantidad:1
    },
    {
        nombre: "limonada",
        precio:2500,
        cantidad:1
    }
]

totalComida = 0;
let divListaMenu =document.querySelector("#pedido")
valorPagar.addEventListener("click", function(evento){
    evento.preventDefault()
    let menuInput = document.querySelector("#pedido").value.toLowerCase()
    let resultado4 = document.querySelector("#resultado4")
    let listaPedido =document.querySelector("#listaPedido")
    let recorido = arrayMenu.find( a => a.nombre == menuInput)
    let nuevaLista = document.createElement("li");
    

    if(recorido == null){
        alert("no esta en el menu lo sentimos")
    }else{
        totalComida =totalComida+recorido.precio;
        nuevaLista.textContent =menuInput +" "+ "$"+ recorido.precio;
        listaPedido.appendChild(nuevaLista)
    }
    resultado4.innerHTML = "Su cuenta es de " + " " + "$" + totalComida
})
