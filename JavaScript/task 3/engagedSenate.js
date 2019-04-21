function DatostotalLeas(totalLeast,comparaNumero){
    var estadistica = new stadistics;
    $("#Table2").append('<tr><th>Name</th>'+
    '<th>No. Missed votes</th>'+'<th>% votes w/ party</th></tr>');
    $("#Table3").append('<tr><th>Name</th>'+
    '<th>No. Missed votes</th>'+'<th>% votes w/ party</th></tr>');
    var lEngaged = estadistica.crearEstadistica('leastEngage');
    for(var i = 0 ; i< totalLeast.length;i++){
      lEngaged.setName(totalLeast[i].nombre);
      lEngaged.setNmvotes (totalLeast[i].missed_votes);
      lEngaged.setMissed(totalLeast[i].missed_votes_pct);
      lEngaged.setUrl(totalLeast[i].url);
      if(totalLeast[i].missed_votes_pct <= comparaNumero){
        $("#Table2").append('<tr>'+'<td>'+'<a href='+ lEngaged.getUrl()+'>' +lEngaged.getName() +'</a>'+'</td>'+
         '<td>'+lEngaged.getNmvotes()+'</td>'+
         '<td>'+lEngaged.getMissed() +'</td>'+'</tr>');
     }
     else{
       $("#Table3").append('<tr>'+'<td>'+'<a href='+ lEngaged.getUrl()+'>' +lEngaged.getName() +'</a>'+'</td>'+
       '<td>'+lEngaged.getNmvotes()+'</td>'+
       '<td>'+lEngaged.getMissed() +'</td>'+'</tr>');
     }
    }
  }
function leastEngage() {
  var comparaNumero;
  var totalLeast = [];
  var total;
  var aux;
  var i=0;
  //Calculo del percentil
  while(Number.isInteger(total) == false){
    total = ((objectSenate.length + i )* 10)/100 ;
    i++;
    }
  //


    for(i = 0 ; i< objectSenate.length; i++){
          var objecto = new Object();
           if(objectSenate[i].middle_name != null){
               objecto.nombre =objectSenate[i].last_name+ " "+objectSenate[i].middle_name+" "+objectSenate[i].first_name;
           }
           else{
               objecto.nombre =objectSenate[i].last_name+ " "+objectSenate[i].first_name;
           }
          objecto.url = objectSenate[i].url;
          objecto.missed_votes_pct = objectSenate[i].missed_votes_pct;
          objecto.missed_votes = objectSenate[i].missed_votes;
          totalLeast.push(objecto);
     }
       //ordeno la lista con el porcentaje
      for(i = 0 ; i < totalLeast.length ; i++){
        for(var j = 0; j < totalLeast.length -1   ; j++){
          if(totalLeast[j].missed_votes_pct > totalLeast[j+1].missed_votes_pct){
            aux = totalLeast[j];
            totalLeast[j] =   totalLeast[j + 1];
            totalLeast[j +1] = aux;
          }
        }
      }
      //
      comparaNumero = totalLeast[total].missed_votes_pct;

      DatostotalLeas(totalLeast,comparaNumero);

}
leastEngage();
