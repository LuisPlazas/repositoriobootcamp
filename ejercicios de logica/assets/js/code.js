//ejercicio 1
let form1 =document.querySelector("#Ejercicio1")
form1.addEventListener(`submit`,function(evento){
    evento.preventDefault()
    let nume =evento.target.num.value
    let total=0
    for(x=1;x<=nume;x++){
        total=total +x
    }
    document.querySelector("#resultado1").innerHTML=total
})

//ejercicio 2
let form2 =document.querySelector("#Ejercicio2")
form2.addEventListener(`submit`,function(evento){
    evento.preventDefault()
    let num=evento.target.nume.value
    if(num %2 ==0){
        document.querySelector("#resultado2").innerHTML="par"
    }else{
        document.querySelector("#resultado2").innerHTML="impar"
    } 
})

//ejercicio3
const numor=document.getElementById("nino")
numor.addEventListener("click",function(){
    const menor=document.getElementById("numo1").value;
    let r=document.getElementById("resultado3");
    if(menor<=10){
        r.innerHTML="si puede reclamar el jugo"
    }else{
        r.innerHTML="no puede reclamar el jugo"
    }
});
const numor1=document.getElementById("may")
numor1.addEventListener("click",function(){
    const m=document.getElementById("numo2").value;
    let r=document.getElementById("resultado3");
    if(m>=18){
        r.innerHTML="si puede reclamar la cerveza"
    }else{
        r.innerHTML="no puede reclamar lacerveza"
    }
});
const numor2=document.getElementById("gen")
numor2.addEventListener("click",function(){
    const g=document.getElementById("numo3").value;
    let r=document.getElementById("resultado3");
    if(g=="mujer"){
        r.innerHTML="reclama una procion de pizza hawaiana"
    }else{
        r.innerHTML="reclama una procion de pizza tres carnes"
    }
});