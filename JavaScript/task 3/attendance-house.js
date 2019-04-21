var objectHouse = JSON.parse(JSON.stringify(house));
console.log(objectHouse.length);
function mostrarEstadisticaGenera(){
  var rep = new stadistics();
  var dem = new stadistics();
  var inden = new stadistics();
  var republicano = rep.crearEstadistica('HouseAtAGlance');
  var democratico = dem.crearEstadistica('HouseAtAGlance');
  var independente = inden.crearEstadistica('HouseAtAGlance');
  var totalsuma;
  var totalcantidad;

  for(var i = 0;i < objectHouse.length; i++){

  if(objectHouse[i].party == 'R'  && objectHouse[i].votes_with_party_pct != undefined){
      republicano.setVotedwParty(republicano.getVotedwParty() + objectHouse[i].votes_with_party_pct);
      republicano.setNreps(republicano.getNreps() + 1);
  }
  if(objectHouse[i].party =='D' && objectHouse[i].votes_with_party_pct != undefined){
      democratico.setVotedwParty(democratico.getVotedwParty() + objectHouse[i].votes_with_party_pct);
      democratico.setNreps(democratico.getNreps() + 1);
  }
    if(objectHouse[i].party == 'I' && objectHouse[i].votes_with_party_pct != undefined){
     independente.setVotedwParty(independente.getVotedwParty() + objectHouse[i].votes_with_party_pct);
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
