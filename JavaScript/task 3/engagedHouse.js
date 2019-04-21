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
    total = ((objectHouse.length + i )* 10)/100 ;
    i++;
    }

    for(i = 0 ; i< objectHouse.length; i++){
          var objecto = new Object();
          if(objectHouse[i].votes_with_party_pct != undefined){
           if(objectHouse[i].middle_name != null){
               objecto.nombre =objectHouse[i].last_name+ " "+objectHouse[i].middle_name+" "+objectHouse[i].first_name;
           }
           else{
               objecto.nombre =objectHouse[i].last_name+ " "+objectHouse[i].first_name;
           }
          objecto.url = objectHouse[i].url;
          objecto.missed_votes_pct = objectHouse[i].missed_votes_pct;
          objecto.missed_votes = objectHouse[i].missed_votes;
          totalLeast.push(objecto);
        }
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
