// No cambies los nombres de las funciones.

const gitRemoteOriginUrl = require("git-remote-origin-url");

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,   x:1
      B: 2,   y:2
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
/**
 * var matriz = [];
  for (var key in objeto){
    console.log(key);
    console.log(objeto[key]); esto nos permite ver q sale por terminal
    nos demostraria algo asi
    objeto({
      x:1,
      y:2,
     
 *//*
 Otro forma de hacerlo es con entries... seria solo esa linea
 return Object. entries(objeto);
  */

  var matriz = [];
  for (var key in objeto){ // se puede mostrar todo lo q va guardando con console.log('que hay en propiedad osea en key' + key)
    // tmb podria hacer otro console.log para q m muestre q hay en el valor, es decir objeto[key]
   matriz.push([key, objeto[key]]);
  }
  return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var objletrasaparecen = {}; // crea un ojbeto vacio
  for(var i=0; i< string.length; i++){
    if (!objletrasaparecen.hasOwnProperty(string[i])){ // si no aparace lo crea
      objletrasaparecen[string[i]] = 1;
      } else {
        objletrasaparecen[string[i]]++; // si ya esta lo suma
      }
  }
  return objletrasaparecen;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var letrasminisc = '';
  var letramayusc = '';
  var letrasfinal = '';
  for(var i=0; i< s.length; i++){
    if (s[i] === s[i].toUpperCase()){ // si no aparace lo crea
        letramayusc += s[i];
      } else {
        letrasminisc += s[i]; // si ya esta lo suma
      }
  }
  letrasfinal = letramayusc + letrasminisc;
  return letrasfinal; // podria haber sido letrmayusc.concat(letraminisc)
}

function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var fraseconespacio = str.split(" "); //le da espacio a la frase
  for (var i = 0; i < fraseconespacio.length; i++){
    fraseconespacio[i] = fraseconespacio[i].split("").reverse().join(""); //primero da espacio, despues lo da vueta y despues lo junta
  }
  return fraseconespacio.join(" "); //le saca el espacio ahora
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numeroastring = numero.toString();
  var numeroinvertido = ""; // tmb podria haber sido --> numeroinvertido = numeroastring.split("").reverse().join("");
  for (var i = numeroastring.length - 1; i >= 0; i--){
      numeroinvertido = numeroinvertido + numeroastring[i];
  }
  if (numeroastring === numeroinvertido){
    return "Es capicua";
  }else {
    return "No es capicua";
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var nvacadena = "";
 
  for (var i = 0; i < cadena.length; i++){
    if (cadena[i] !== "a" && cadena[i] !== "b" && cadena[i] !== "c"){
      nvacadena = nvacadena + cadena[i];
    }
  }
  return nvacadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  arr.sort(function (a, b){
    if(a.length > b.length){
      return 1;
    }
    if (a.length < b.length){
      return -1;
    }
    return 0;

  });
  return arr;

}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
   var arraynuevo = [];
   for (var i = 0; i < arreglo1.length; i++){
    for (var j = 0; j < arreglo2.length; j++){
    if (arreglo1[i]===arreglo2[j]){
      arraynuevo.push(arreglo1[i]);
    }
  }
}
 return arraynuevo;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

