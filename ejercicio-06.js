
//todo Ordena alfabéticamente un array con 7 palabras, puedes usar el algoritmo de la burbuja


//1 var verduras=[cebolla,lechuga,espinacas,maiz,berenjena,alcachofa,judias,]

let palabras = [];

for (let i = 0; i < 7; i++) {
  palabras[i] = prompt(`Escribe la palabra ${i + 1}:`);
}


for (let i = 0; i < palabras.length - 1; i++) {                //el proceso se repite el mismo numero de elementos -1
  for (let j = 0; j < palabras.length - i - 1; j++) {         //recorre el array comparando palabras.... se podría empezar en j=0 y ahorrarse el -1
    if (palabras[j] > palabras[j + 1]) {                     //comparo posiciones seguidas
      let temp = palabras[j];                                //asigno a temp el valor si es mayor para dejarlo en la izquierda
      palabras[j] = palabras[j + 1];                        //adelanto posicion [j]
      palabras[j + 1] = temp;                               // vuelvo a meter el valor al principio del porceso con temp
    }
  }
}
console.log(palabras);

  



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


// var numeros=[8,7,9]
// var nuevaArray=[]


// for(let i = 0;i<numeros.length-1;i++){

//    if(numeros[i]<numeros[i+1]){
      
      
//       nuevaArray.push(numeros[i])
//       nuevaArray.push(numeros[i+1])
//    }else{
//       nuevaArray.push(numeros[i+1])
//       nuevaArray.push(numeros[i])
      

//    }

// } console.log(nuevaArray)                          



