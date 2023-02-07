//! Solicita al usuario tres números enteros e indícale cuál es el menor
//todo coger los numeros con un for y una array Ejercicio Plus

// var numero1= parseInt(prompt("mete un numero",0))  parseFloat combierte a Real 
// var numero2= parseInt(prompt("mete un numero",0)) 
// var numero3= parseInt(prompt("mete un numero",0))


// (function compara(numero1, numero2, numero3) {
//         if (numero1 - numero2 < 0 && numero1 - numero3 < 0) {

//                 console.log("el numero menor  es " + numero1);
//         } else if

//                 (numero2 - numero1 < 0 && numero2 - numero3 < 0) {

//                 console.log("el numero menor es " + numero2);

//         } else {
//                 console.log("el numero menor  es " + numero3);
//         }
// })(parseInt(prompt("mete un numero", 0)),
//         parseInt(prompt("mete un numero", 0)),
//         parseInt(prompt("mete un numero", 0)));


function compara(numero1, numero2, numero3) {
        var numero1= parseInt(prompt("mete un numero",0))   
        var numero2= parseInt(prompt("mete un numero",0)) 
        var numero3= parseInt(prompt("mete un numero",0))
        
        if (numero1 - numero2 < 0 && numero1 - numero3 < 0) {

                console.log("el numero menor  es " + numero1);
        } else if

                (numero2 - numero1 < 0 && numero2 - numero3 < 0) {

                console.log("el numero menor es " + numero2);

        } else {
                console.log("el numero menor  es " + numero3);
        }
}       




