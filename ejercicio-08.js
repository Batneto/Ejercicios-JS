//! Una función que muestre al usuario una secuencia de * (se debe construir la cadena de uno en uno), la cantidad de * será solicitada al usuario

function asteriscos() {
    
    var num=prompt("mete un numero ",0)
    var cadena=""

    for(i=0; i<num; i++){
        cadena += "*"
    }  return console.log(cadena);
}

//    console.log(cifras()); 