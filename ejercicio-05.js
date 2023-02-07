


//todo Ejercicio Resuelto 

var letra = prompt("mete una a,b,c")

if(letra!="a"|| letra!="b" || letra!="c" ){
    alert("Te has confundido de letra mete otra ")
    letra = prompt("mete una leta")
}

switch (letra) {
    
case "a":
    console.log(7);
    break;
case "b": 
    console.log(9)
    break// 
case "c": 
    console.log(101);
    break; 
}
/* default:
    console.log('te has equivocado de letra');
} */


