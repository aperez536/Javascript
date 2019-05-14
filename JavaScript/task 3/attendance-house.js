/**
 * @Date:   2019-05-04T17:54:04-03:00
 * @Last modified time: 2019-05-04T17:54:04-03:00
 */



var pathname = window.location.pathname;
var dato;
if(this.pathname('attendance-senate.html')){
  dato = JSON.parse(JSON.stringify(senate));
}
if(this.pathname('attendance-house.html')){
 dato = JSON.parse(JSON.stringify(house));
}
console.log(dato.length);
function mostrarEstadisticaGenera(){
  var rep = new stadistics();
  var dem = new stadistics();
  var inden = new stadistics();
  var republicano = rep.crearEstadistica('HouseAtAGlance');
  var democratico = dem.crearEstadistica('HouseAtAGlance');
  var independente = inden.crearEstadistica('HouseAtAGlance');
  var totalsuma;
  var totalcantidad;

  for(var i = 0;i < dato.length; i++){

  if(dato[i].party == 'R'  && dato[i].votes_with_party_pct != undefined){
      republicano.setVotedwParty(republicano.getVotedwParty() + dato[i].votes_with_party_pct);
      republicano.setNreps(republicano.getNreps() + 1);
  }
  if(dato[i].party =='D' && dato[i].votes_with_party_pct != undefined){
      democratico.setVotedwParty(democratico.getVotedwParty() + dato[i].votes_with_party_pct);
      democratico.setNreps(democratico.getNreps() + 1);
  }
    if(dato[i].party == 'I' && dato[i].votes_with_party_pct != undefined){
     independente.setVotedwParty(independente.getVotedwParty() + dato[i].votes_with_party_pct);
     independente.setNreps(independente.getNreps() + 1);
    }
  }

    totalsuma = republicano.getVotedwParty()+ democratico.getVotedwParty() +   independente.getVotedwParty();

    democratico.setVotedwParty( democratico.getVotedwParty() / totalsuma);
    republicano.setVotedwParty(republicano.getVotedwParty()/totalsuma);
    independente.setVotedwParty(independente.getVotedwParty()/totalsuma);
    totalcantidad = republicano.getNreps() + democratico.getNreps() + independente.getNreps();
    totalsuma = totalsuma / totalsuma;
    $("#Table1").append('<tr><th>Party</th>'+
    '<th>No. of Reps</th>'+'<th>% votes w/ parte</th></tr>'+
      '<tr><td>Democrats </td>'+ '<td>'+  democratico.getNreps()+ '</td>'+ '<td>'+democratico.getVotedwParty().toFixed(2)  +'</td></tr>'+
      '<tr><td>Republician </td>'+ '<td>'+republicano.getNreps()+ '</td>'+ '<td>'+republicano.getVotedwParty().toFixed(2)  +'</td></tr>'+
      '<tr><td>Independent </td>'+ '<td>'+ independente.getNreps()+ '</td>'+ '<td>'+independente.getVotedwParty().toFixed(2)  +'</td></tr>'+
      '<tr><td>total </td>'+ '<td>'+totalcantidad+ '</td>'+ '<td>'+totalsuma.toFixed(2)  +'</td></tr>');
}

  mostrarEstadisticaGenera();
