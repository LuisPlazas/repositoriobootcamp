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
let form3=document.querySelector("#Ejercicio3")
form3.addEventListener(`submit`,function(evento){
evento.preventDefault()
let nume=evento.target.numer.value
let gen=evento.target.genero.value

    if(gen =="mujer" && nume<=10 ){
    document.querySelector("#resultado3").innerHTML="si puede reclamar un jugo y una pizza Hawaiana"
    }else if( gen =="mujer"&& nume>10 && nume<17){
        document.querySelector("#resultado3").innerHTML="si puede reclamar una pizza Hawaiana"
    }else if(gen =="mujer" && nume>=18){
        document.querySelector("#resultado3").innerHTML="si puede reclamar una cerveza y una pizza Hawaiana"
    }else if (gen=="hombre"&& nume<=10){
        document.querySelector("#resultado3").innerHTML="si puede reclamar un jugo y una pizza tres carnes"
    }else if(gen =="hombre"&& nume>10 && nume<17){
        document.querySelector("#resultado3").innerHTML="si puede reclamar una pizza tres carnes"
    }else if(gen =="hombre" && nume>=18)
    document.querySelector("#resultado3").innerHTML="si puede reclamar una cerveza y una pizza tres carnes"
})

//ejercicio4


    

//ejercicio5
let form5=document.querySelector("#Ejercicio5")
form5.addEventListener(`submit`,function(evento){
    evento.preventDefault()
    let mul=document.querySelector("#mul")
    let num=document.querySelector("#numero").value
    let res=document.querySelector("#resultado5")
    for(let z=1; z<=num; z++){
        m=num*z
        res.innerHTML+=num+ "*"+ z +"=" + " " + m +"<br>"
    }
})

//ejercicio6
let form6=document.querySelector("#Ejercicio6")
form6.addEventListener(`submit`,function(evento){
    evento.preventDefault()
    let mat=evento.target.matri.value
    let pro=evento.target.prome.value
    let total
    if(mat==1000000 && pro<3){
        document.querySelector("#resultado6").innerHTML=`el valor a pagar de la matricula es ${mat}`
    }else if(mat==1000000 &&pro>=3 && pro<4){
        total=(1000000*5)/100 
        document.querySelector("#resultado6").innerHTML=`su descuento es ${total} debe pagar solo 950000`
    }else if(mat==1000000 && pro>=4 && pro<=5){
        total=(1000000*50)/100
        document.querySelector("#resultado6").innerHTML=`su descuento es ${total} debe pagar solo ${total}`
    }else if (mat!=1000000){
        document.querySelector("#resultado6").innerHTML=`el valor de la matricula es ${mat} no cuenta con descuento`
    }
})



