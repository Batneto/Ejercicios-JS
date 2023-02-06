
//todo Ordena alfabéticamente un array con 7 palabras, puedes usar el algoritmo de la burbuja


//1 var verduras=[cebolla,lechuga,espinacas,maiz,berenjena,alcachofa,judias,]





//todo Ejercicio pero con 2  numero


// var numero=[4,2]

// var nuevaArray=[]

// if(numero[0] < numero[1]){
//    console.log(numero);
        
// }else{
//    nuevaArray.push(numero[1])
//    nuevaArray.push(numero[0])
//    console.log(nuevaArray);
//    }




//todo Ejercicio pero con 3 numeros


var numeros=[8,7,9]
var nuevaArray=[]


for(let i = 0;i<numeros.length-1;i++){

   if(numeros[i]<numeros[i+1]){
      
      
      nuevaArray.push(numeros[i])
      nuevaArray.push(numeros[i+1])
   }else{
      nuevaArray.push(numeros[i+1])
      nuevaArray.push(numeros[i])
      

   }

} console.log(nuevaArray)                          



