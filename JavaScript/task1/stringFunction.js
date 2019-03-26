console.log("PUNTO 1:");
function invertirNumero(numero){
  var invertido = 0;
  var resto = numero;
 while  (resto > 0) {  
    invertido = invertido * 10 + (resto % 10);
    resto = Math.floor(resto / 10);
    }
  return invertido;
}
var x = 344423;
console.log(invertirNumero(x));

console.log("PUNTO 2");

function ordenarCadena(p){

return p.split("").sort().join("");
}

var palabra = "webmaster";
console.log(ordenarCadena(palabra));

console.log("PUNTO 3");
function pMayusculaPalabra(peli){
  var devolver = peli.split(" ");
  var palabraMayuscula = new Array();
  var res;
  for (var i = 0; i< devolver.length; i++){
    palabraMayuscula[i] = devolver[i].charAt(0).toUpperCase() +
      devolver[i].substr(1, devolver[i].length);
  
  }
  res = palabraMayuscula.join(" ");
  return res;
}
var pelicula = "principe de persia";

var pelic=pMayusculaPalabra(pelicula);

console.log(pelic);

/*SORT ORDENA ALFABETICAMENTE   */
/*SPLIT DIVIDE  */
/*Join une  */
console.log("PUNTO 4 : ");
function buscarpalabralargo(palabra){
 var res =[];
 res = palabra.split(" ");
 var n = 0;
 var guardarPalabra = new String();
  for (var i = 0 ; i< res.length; i++){
    if(res[i].length > n ){
      n = res[i].length;
      guardarPalabra = res[i];
    }
  }
  return guardarPalabra;
}
var titulo = "Tutorial de desarrollo web";
console.log(buscarpalabralargo(titulo));