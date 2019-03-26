console.log("iniciando javascript");


/* PROMPT es guardado de datos  */
/* Fundamentos de javascript */

console.log("Punto 1:");
var myName = "alan";
console.log("nombre:",myName);


console.log("Punto 2:");
var age = 24;
console.log("edad:",age);


console.log("Punto 3:");
var ignasiAge = 32;
var ageDiff = prompt('what is your age?, Diff');
var result = ignasiAge - ageDiff;
console.log("diferencia de edad :",result);


console.log("Punto 4:");
if(ageDiff>21){
  console.log("Diff es mayor de 21");
}
else if(ageDiff < 21){
  console.log("Diff es menor de 21");
}
else{
  console.log("Diff tiene 21 años");
}

console.log("Punto 5:");
if(ignasiAge>age){
  console.log("Ignasi es mas viejo que yo");
}
else if(ignasiAge < age){
  console.log("Ignasi es mas joven que yo");
}
else{
  console.log("Tenemos la misma edad");
}
