//! Suma o resta (según elija el usuario) dos números reales


//* Resolucion sin Funciones

var n1 = parseFloat(prompt("Inserta un número"));
var n2 = parseFloat(prompt("Inserta un número"));
var operacion = prompt("Qué operacion quieres hacer? en minuscula");


if (operacion == "suma"){ 
    console.log(n1+n2);
}else if(operacion == "resta"){
    console.log(n1-n2);
} else{
    alert("COMPRUEBA ENTRADAS");
}


//* Resolucion con funciones


// function suma(n1,n2){

//     console.log(n1+n2)
// }

// function resta(n1,n2){

//     console.log(n1-n2)
// }