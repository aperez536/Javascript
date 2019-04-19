var objectSenate = JSON.parse(JSON.stringify(senate));
function leastEngage() {
  var totalLeast = [];
  var total;
  var i=0;
  var bandera = new Boolean(false);
  while(Number.isInteger(total) == false){
    total = (objectSenate.length + i )* 0.1 ;
    i++;
    }
  console.log(total);
}
leastEngage();
