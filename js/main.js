var pantallaValorAnterior = document.getElementById("valor-anterior");
var pantallaValorActual = document.getElementById("valor-actual");
const botonesNumeros = document.querySelectorAll(".numero");
const botonesOperadores = document.querySelectorAll(".operador");
const botonesFunciones = document.querySelectorAll(".funcion");
let valorActual = "";
let valorAnterior = "";
let simbolo = "";
let resultado = "";

function suma(nro1, nro2){
    rta = parseFloat(nro1) + parseFloat(nro2)  
    console.log(rta +" <Suma> "+typeof rta )
    return rta 
};
function resta(nro1, nro2){
    return parseFloat(nro1) - parseFloat(nro2)    
};
function multiplicacion(nro1, nro2){
    return parseFloat(nro1) * parseFloat(nro2)    
};
function division(nro1, nro2){
    return parseFloat(nro1) / parseFloat(nro2)    
};
//-------------
function borrar(){
    pantallaValorActual.textContent =  pantallaValorActual.textContent.toString().slice(0,-1);
};
function borrarTodo(){
    pantallaValorActual.innerHTML = "";
    pantallaValorAnterior.innerHTML = "";
    valorActual = "";
    valorAnterior ="";
};
//--------------
function agregar_numero(numero){
    let numeros = "";
    numeros = numeros + numero;
    return numeros
};
function imprimir_actual(numeros){
    pantallaValorActual.textContent = pantallaValorActual.textContent + numeros;
    valorActual = pantallaValorActual.textContent;
    console.log(">"+valorActual+"< Valor actual")
};
function imprimir_anterior(numeros){
    pantallaValorAnterior.textContent =  numeros+pantallaValorActual.textContent;
    valorAnterior = pantallaValorAnterior.textContent;
    pantallaValorActual.textContent = "";
    return pantallaValorActual.textContent
};
//--------------
botonesNumeros.forEach(boton => {
    boton.addEventListener("click", ()=>
    imprimir_actual(agregar_numero(boton.innerHTML))) //valorActual tiene el mismo valor de pantallavaloractual
    
});
botonesOperadores.forEach(operador => {
    operador.addEventListener("click", ()=>{
    switch (operador.value){
        case "sumar":
            simbolo = "+"
            valorActual =  imprimir_anterior(pantallaValorAnterior.textContent)
            /*console.log(valorAnterior + " + " + valorActual)
            console.log(pantallaValorAnterior.innerText + " <> "+ pantallaValorActual.innerText)
           */ break
        case "restar":
            simbolo = "-"
            valorActual =  imprimir_anterior(pantallaValorAnterior.textContent)
            break
        case "multiplicar":
            simbolo = "*"
            valorActual =  imprimir_anterior(pantallaValorAnterior.textContent)
            break
        case "dividir":
            simbolo = "/"
            valorActual =  imprimir_anterior(pantallaValorAnterior.textContent)
            break
        case "igual":
            if (valorAnterior != "" && pantallaValorActual !="" && simbolo != ""){
                switch (simbolo){
                    case "+":
                        pantallaValorActual.textContent = "";
                        imprimir_actual(suma(valorAnterior, valorActual))
                        pantallaValorAnterior.textContent = "";
                        break
                    case "-":
                        pantallaValorActual.textContent = "";
                        imprimir_actual(resta(valorAnterior, valorActual))
                        pantallaValorAnterior.textContent = "";
                        break
                    case "*":
                        pantallaValorActual.textContent = "";
                        imprimir_actual(multiplicacion(valorAnterior, valorActual))
                        pantallaValorAnterior.textContent = "";
                        break
                    case "/":
                        pantallaValorActual.textContent = "";
                        imprimir_actual(division(valorAnterior, valorActual))
                        pantallaValorAnterior.textContent = "";
                        break
                }
            }
            else{
                pantallaValorActual.textContent = "";
                pantallaValorAnterior.textContent = "";
            }
    }
    })
});
botonesFunciones.forEach(botonFuncion => {
    botonFuncion.addEventListener("click", ()=>{
        switch(botonFuncion.value){
            case "borrar":
                borrar()
                break
            case "borrar todo":
                console.log("zzzzzz")
                borrarTodo()
                break
            case "operadores":
                break
        }
    })
});