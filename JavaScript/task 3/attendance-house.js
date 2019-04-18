var objectSenate = JSON.parse(JSON.stringify(senate));
function stadistics(){
  this.nreps = 0 ;
  this.votedwparty = 0;
  this.name = ' ';
  this.nmissed= 0;
  this.missed = 0;
}
function mostrarEstadisticaGenera(){
  var republicano = new stadistics();
  var democratico = new stadistics();
  var independente = new stadistics();
  var totalsuma;
  var totalcantidad;

  for(var i = 0;i < objectSenate.length; i++){
    if(objectSenate[i].party == 'R' ){
      republicano.votedwparty+=  objectSenate[i].votes_with_party_pct;
      republicano.nreps+= 1;
    }
    if(objectSenate[i].party =='D'){
      democratico.votedwparty+= objectSenate[i].votes_with_party_pct;
      democratico.nreps+=1;
    }
    if(objectSenate[i].party == 'I'){
      independente.votedwparty+=  objectSenate[i].votes_with_party_pct;
      independente.nreps+= 1;
    }
  }
    totalsuma = republicano.votedwparty + democratico.votedwparty +   independente.votedwparty;
    republicano.votedwparty = (republicano.votedwparty/100);
    democratico.votedwparty = (democratico.votedwparty/100);
    independente.votedwparty = (  independente.votedwparty/100);
    totalsuma = totalsuma/100;
    totalcantidad = republicano.nreps + democratico.nreps + independente.nreps;
    $("#Table1").append('<tr><th>Party</th>'+
    '<th>No. of Reps</th>'+'<th>% votes w/ parte</th></tr>'+
      '<tr><td>Democrats </td>'+ '<td>'+ democratico.nreps+ '</td>'+ '<td>'+democratico.votedwparty.toFixed(2)  +'</td></tr>'+
      '<tr><td>Republician </td>'+ '<td>'+republicano.nreps+ '</td>'+ '<td>'+republicano.votedwparty.toFixed(2)  +'</td></tr>'+
      '<tr><td>Independent </td>'+ '<td>'+independente.nreps+ '</td>'+ '<td>'+independente.votedwparty.toFixed(2)  +'</td></tr>'+
      '<tr><td>total </td>'+ '<td>'+totalcantidad+ '</td>'+ '<td>'+totalsuma.toFixed(2)  +'</td></tr>');
}
function leastEngage() {
  var totalLeast = [];

}

  mostrarEstadisticaGenera();
