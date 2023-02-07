
//! Solicita al usuario una frase y una letra y muestra la cantidad de veces que aparece la letra en la frase.

// var letra= prompt("mete una letra");
 
// var frase= prompt("mete una frase");



function cuenta(letra,frase) {
    var letra= prompt("mete una letra");
 
    var frase= prompt("mete una frase");

    let cont=0;

    for(let i = 0; i<frase.length; i++){
        if(letra==frase[i]){
            cont++;
        }
    } return console.log(cont); 
}


// console.log(cuenta("a","aaaaa"));


