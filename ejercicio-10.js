
//! Una función que permita mostrar un triángulo como el siguiente:

var num=parseInt(prompt("mete un numero ",0))

var cadena="*+_"

var respuesta=""


for(i=0;i<num;i++){
    
    respuesta += cadena[i%3]
    
}


console.log(respuesta);

