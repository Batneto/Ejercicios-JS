
//! Una función que devuelva el número de cifras de un entero solicitado al usuario


var num = parseInt(prompt("mete un numero ",0));

var cuenta = 1;

var realizado = false;


if(num<0){
    num=num*(-1);
}

  

while (!realizado){

    if (num<10){
        realizado = true;
        
        
    }
    else{
        num = num/10;
        cuenta++;
    }
}
console.log(cuenta); 





    


