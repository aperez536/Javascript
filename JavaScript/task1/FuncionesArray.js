
console.log("Funciones de array de JavaScript");
/*Funciones de  array JavaScript  */
console.log("Punto 1:");
var array = ["pablo","juan", "alan","brenda"];
console.log("array sin ordenar:");
console.log(array);
console.log("array ordenado");
console.log(array.sort());

console.log("Punto 2:");
/*este array s elo usa tambien para buscar el maximo y minimo valor */
var edades = [19,21,21,22,42,55,18,24,32,27,30];
var i = 0;
/* con while */
while(i < edades.length){
  console.log("perona ",i+1 ," su edad es",edades[i]);
  i++;
}

console.log("  ");
/*  Con for  */

for( i = 0 ;  i < edades.length ; i++){
    console.log("perona ",i+1 ," su edad es",edades[i]);

}


console.log("Punto 3:");

function minimoValor(array){
  var minimo = 99999999;
  for( var  i = 0 ;  i < array.length ; i++){
      if(array[i] < minimo){
        minimo = array[i];
      }
  }
  return minimo;
}


var valorMinimo = minimoValor(edades);
console.log(valorMinimo);

console.log("Punto 4:");
function maximoValor(array){
  var maximo = -99999999;
  for( var  i = 0 ;  i < array.length ; i++){
      if(array[i] > maximo){
        maximo = array[i];
      }
  }
  return maximo;
}


var valorMaximo = maximoValor(edades);
console.log(maximoValor(edades));

console.log("Punto 5:");

function obtenerDatoPosicion(array,b){
  var devolverDato=0;
  isTrue = new Boolean(false);
  var i = 0;
  while(i < array.length && isTrue == false){
    if(i == b) {
      console.log(i);
      devolverDato = array[i];
      isTrue = true;
    }
    i++;
  }
  return devolverDato;
}

var datos = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
var index = 1;
var valorPosicion = obtenerDatoPosicion(datos,index);
console.log(valorPosicion);

console.log("PUNTO 6: ");

function repetido(array){
  var nrepetido = [];
  var posicion = 0;
for(var i = 0 ; i < array.length;i++)
{
  for(var j = i + 1; j < array.length - 1; j ++){
      if(array[i] == array[j]){
        nrepetido[posicion] = array[j];
        posicion++;
      }
  }
}
return nrepetido;
}

var numerosRepetidos = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
var unico = new Array();
unico =  repetido(numerosRepetidos);
console.log(unico);

console.log("Punto 7:");
function unirElemento(x){
  return x.join();
}
var myColor = ["Red", "Green", "White", "Black"];
console.log(unirElemento(myColor));
