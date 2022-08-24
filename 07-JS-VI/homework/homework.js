// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  var soloprimerletramayuscula = nombre[0].toUpperCase() + nombre.substring(1); // con substring (1) significa q va hasta el final de la palabra
  //tmb se podria usar slice(1)
  return soloprimerletramayuscula;
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb(); // solo es llamar la funcion
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  cb(n1, n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  /* si fuera con reduce
  var total = numeros.reduce(function(a, b) { // reduce seria como un for
    return (a + b)}, 0);
    */
  var sumatotaldelarray = 0;
  for (var i = 0 ; i < numeros.length; i++) {
    sumatotaldelarray = sumatotaldelarray + numeros[i];
  }
  cb(sumatotaldelarray);
  
  /*como depurar RUN AND DEBUG 
  antes colocar boton rojo(breakpoint) a la izq
  y invocar de esta forma :
  let arrary = [1, 2, 3, 4];
  function cb(x){ return ('rdo : ' + x)}
  sumarArray(array, cb)*/
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  /*callback q es una funcion*/
  /** puede hacerse de dos formas con for o con foreach
  for (var i = 0 ; i < array.length; i++) {
    cb(array[i]);
  }
    */
   /** 
    * para entender mejor como trabaja el foreach
    * array --> [1, 2, 3, 4]
    *             a...>
    * cb--> function suma(s){
    *   return 1 + 1} ... desp 2 +1.. 3+1 ... 4+1
    */
  array.forEach(function(a){
    cb(a); // para este caso no es necesario usar return... xq ya la funcion cb tiene un return
  })
   
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  var arraynuevo = array.map(function(elemento){
    return cb(elemento) // si o si usar return cdo usamos map
  });
  return arraynuevo;
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  var arraynuevo = array.filter(function (e){
    return e[0] === 'a'; // tmb podria haber sido e.charAt(0)
    })
    return arraynuevo;
    /** tmb podria haber sido directamente asi
     * return array.filter(function (e){
        return e[0] === 'a'; // tmb podria haber sido e.charAt(0)
    })
     */
    /* otra forma tmb podria ser asi: declarando la funcion por un lado e invocandola por otro
    function nombredefuncion (e){
    return e.charAt(0) === 'a'; 
    })
    return array.filter(nombredefuncion);
     */
  }

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
