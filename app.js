let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = []; //almacenera numero sortead
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){ //pstsmetros que va a usar la función
    let elementoHTML = document.querySelector(elemento);
    // Puente entre js y html
    elementoHTML.innerHTML = texto;
    return; //para demostrar una función que retorna algo
}
function verificarIntento() {
    // función se llama en HTML on hacen acciones
    //función hace una acción validar intento del usuario
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); // retorna el objeta
   
    console.log(intentos);
    if(numeroDeUsuario === numeroSecreto){ //verdadero solo si tambien coincide el tipo de dato
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled'); // con id si se acierta se puede reiniciar esta en HTML
    } //comparar dato booleano retorna true o false

    else{
        //el usuario no aceptó
        if(numeroDeUsuario > numeroSecreto){
        asignarTextoElemento('p','El número secreto es menor');
        }
        else{
        asignarTextoElemento('p','El número secreto es mayor'); //si el numero del usuario no es elsecreto seda una pista si es mayor o menor
        }
        intentos ++;
        limpiarCaja();
    }
  
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = ''; //# para utilizar id
    
}

function generarNumeroSecreto() {
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; 
     //cuando ejecutemos la funcion va a retornar un valor
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
     //si ya sorteamos todos los números
     if(listaNumerosSorteados.length == numeroMaximo){ //si ya se usarontodos los numeros sale el mensaje
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
     }
     else {
     //si el numero generado está en la lista
     if(listaNumerosSorteados.includes(numeroGenerado)){//includes recorre todo nuestro arreglo y verifica si existe
        return generarNumeroSecreto();
     }else {
        listaNumerosSorteados.push(numeroGenerado); //recursividad
        return numeroGenerado;
    } 
    }
    

}

function condicionesIniciales()
{
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica el número del 1 al ${numeroMaximo}` );//se llama la función
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego()
{
//limpiar caja
limpiarCaja();
//Indicar manejo de intervalo denúmeros
//Generar numeros aleatorios
//inicializar el número de intentos
condicionesIniciales();
//Desahabilitar el botón de nuevo juego
document.querySelector('#reiniciar').setAttribute('disabled','true'); //aceptar eldisabled con el valor true coloca esto con tal valor
}

condicionesIniciales();
