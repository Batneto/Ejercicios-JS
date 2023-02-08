
//! Una función que permita mostrar la secuencia (se debe construir la cadena de uno en uno):




    
    var num=parseInt(prompt("mete un numero ",0))


    var cadena=""

    for(var i=0; i<num ;i++){

        for(var j=0; j<=i ; j++){

            cadena += "*"
            
        }
        console.log(cadena);
        cadena="";
    }  
    
    // console.log(cadena);


   