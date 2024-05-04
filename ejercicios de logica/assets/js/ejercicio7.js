
//ejercicio7
let lista = []
document.querySelector("#formulario").addEventListener("submit", (evento) => {
    evento.preventDefault()
    let inputNuevoElemento = evento.target.elemento.value
    let validacionIndexOf = lista.indexOf(inputNuevoElemento)
    console.log('validacionIndexOf:', validacionIndexOf)
    let posicionInput = evento.target.posicion.value
    if (posicionInput == '') {
        if (validacionIndexOf == -1) {
            lista.push(inputNuevoElemento)
        } else {
            alert('El valor ya existe en el array')
        }
    } else {
        let cantidadElementos = lista.length
        console.log('cantidadElementos:', cantidadElementos)
        if (posicionInput <= cantidadElementos) {
            lista.splice(posicionInput, 0, inputNuevoElemento)
        } else {
            alert('El numero especificado es mayor a la cantidad de elementos en el array')
        }

    }
    let divHTML = document.querySelector("#Lista_elementos")
    divHTML.innerHTML = ""
    lista.forEach((element, posicion) => {
        divHTML.innerHTML += `<p>${posicion+1} - ${element}</p>`
    });

})
