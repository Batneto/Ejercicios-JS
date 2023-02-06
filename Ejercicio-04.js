//!Almacena en dos variables datos de validación (usuario y contraseña) correctos y permite que el usuario valide (dispone de 3 intentos)


//todo Ejercico "resuelto"



var usuarioBueno= "pepe";
var passBuena= "juan";
let j = 1;

var usuario=(prompt("Mete tu usario"));
var pass=(prompt("Mete tu pass"));

do{ 
    var usuario=(prompt("Mete tu usario"));
    var pass=(prompt("Mete tu pass"));
   
 j++ 
}while((usuarioBueno!=usuario||passBuena!=pass)&&j<=3)


//todo Ejercicio mejor

