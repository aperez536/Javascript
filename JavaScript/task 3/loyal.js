var pathname = window.location.pathname;
var dato;
if(pathname.includes('partyLoyaltySenate.html')){

       dato = JSON.parse(JSON.stringify(senate));
	}
      else if(pathname.includes('partyLoyaltyHouse.html')){
       
        dato = JSON.parse(JSON.stringify(house));
	console.log(dato)
	}
else{}
function DatostotalLoyal(totalLeast,comparaNumero){
    var estadistica = new stadistics;
    $("#Table2").append('<tr><th>Name</th>'+
    '<th>No. Party votes</th>'+'<th>% Party votes</th></tr>');
    $("#Table3").append('<tr><th>Name</th>'+
    '<th>No. Party votes</th>'+'<th>% % Party votes</th></tr>');
    var lEngaged = estadistica.crearEstadistica('leastEngage');
    for(var i = 0 ; i< totalLeast.length;i++){
      lEngaged.setName(totalLeast[i].nombre);
      lEngaged.setTotalVotes(totalLeast[i].total_votes);
      lEngaged.setVotedwParty(totalLeast[i].votes_with_party_pct);
      lEngaged.setUrl(totalLeast[i].url);
      if(totalLeast[i].votes_with_party_pct <= comparaNumero){
        $("#Table2").append('<tr>'+'<td>'+'<a href='+ lEngaged.getUrl()+'>' +lEngaged.getName() +'</a>'+'</td>'+
         '<td>'+lEngaged.getTotalVotes()+'</td>'+
         '<td>'+lEngaged.getVotedwParty() +'</td>'+'</tr>');
     }
     else{
       $("#Table3").append('<tr>'+'<td>'+'<a href='+ lEngaged.getUrl()+'>' +lEngaged.getName() +'</a>'+'</td>'+
       '<td>'+lEngaged.getTotalVotes()+'</td>'+
       '<td>'+lEngaged.getVotedwParty() +'</td>'+'</tr>');
     }
    }
  }
function Loyal() {
  var comparaNumero;
  var totalLeast = [];
  var total;
  var aux;
  var i=0;
  //Calculo del percentil
  
  //
    for(i = 0 ; i< dato.length; i++){
          var objecto = new Object();
          if(dato[i].votes_with_party_pct != undefined){
           if(dato[i].middle_name != null){
               objecto.nombre =dato[i].last_name+ " "+dato[i].middle_name+" "+dato[i].first_name;
           }
           else{
               objecto.nombre =dato[i].last_name+ " "+dato[i].first_name;
           }
          objecto.url = dato[i].url;
          objecto.total_votes = dato[i].total_votes;
          objecto.votes_with_party_pct = dato[i].votes_with_party_pct;
          totalLeast.push(objecto);
     }
   }
       //ordeno la lista con el porcentaje
      for(i = 0 ; i < totalLeast.length ; i++){
        for(var j = 0; j < totalLeast.length -1   ; j++){
          if(totalLeast[j].votes_with_party_pct > totalLeast[j+1].votes_with_party_pct){
            aux = totalLeast[j];
            totalLeast[j] =   totalLeast[j + 1];
            totalLeast[j +1] = aux;
          }

        }
      }
      //
	while(Number.isInteger(total) == false){
   	 total = ((dato.length + i )* 10)/100 ;
   	 i++;
  	  }
     comparaNumero = totalLeast[total].votes_with_party_pct;

      DatostotalLoyal(totalLeast,comparaNumero);

}
Loyal();
