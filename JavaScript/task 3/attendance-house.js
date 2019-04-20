var objectSenate = JSON.parse(JSON.stringify(senate));
function mostrarEstadisticaGenera(){
  var rep = new stadistics();
  var dem = new stadistics();
  var inden = new stadistics();
  var republicano = rep.crearEstadistica('HouseAtAGlance');
  var democratico = dem.crearEstadistica('HouseAtAGlance');
  var independente = inden.crearEstadistica('HouseAtAGlance');
  var totalsuma;
  var totalcantidad;

  for(var i = 0;i < objectSenate.length; i++){
    if(objectSenate[i].party == 'R' ){
      republicano.setVotedwParty(republicano.getVotedwParty() + objectSenate[i].votes_with_party_pct);
      republicano.setNreps(republicano.getNreps() + 1);
    }
    if(objectSenate[i].party =='D'){
      democratico.setVotedwParty(democratico.getVotedwParty() + objectSenate[i].votes_with_party_pct);
      democratico.setNreps(democratico.getNreps() + 1);
    }
    if(objectSenate[i].party == 'I'){
     independente.setVotedwParty(independente.getVotedwParty() + objectSenate[i].votes_with_party_pct);
     independente.setNreps(independente.getNreps() + 1);
    }
  }
    totalsuma = republicano.getVotedwParty()+ democratico.getVotedwParty() +   independente.getVotedwParty();
    democratico.setVotedwParty( democratico.getVotedwParty() / 100);
    republicano.setVotedwParty(republicano.getVotedwParty()/100);
    independente.setVotedwParty(independente.getVotedwParty()/100);
    totalsuma = totalsuma/100;
    totalcantidad = republicano.getNreps() + democratico.getNreps() + independente.getNreps();
    $("#Table1").append('<tr><th>Party</th>'+
    '<th>No. of Reps</th>'+'<th>% votes w/ parte</th></tr>'+
      '<tr><td>Democrats </td>'+ '<td>'+  democratico.getNreps()+ '</td>'+ '<td>'+democratico.getVotedwParty().toFixed(2)  +'</td></tr>'+
      '<tr><td>Republician </td>'+ '<td>'+republicano.getNreps()+ '</td>'+ '<td>'+republicano.getVotedwParty().toFixed(2)  +'</td></tr>'+
      '<tr><td>Independent </td>'+ '<td>'+ independente.getNreps()+ '</td>'+ '<td>'+independente.getVotedwParty().toFixed(2)  +'</td></tr>'+
      '<tr><td>total </td>'+ '<td>'+totalcantidad+ '</td>'+ '<td>'+totalsuma.toFixed(2)  +'</td></tr>');
}

  mostrarEstadisticaGenera();
