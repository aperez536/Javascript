   var arraytotal = [];
   var objectHouse = JSON.parse(JSON.stringify(house));
   var resultado = document.getElementById("datos_del_senado");
   var nombreCompleto;
   var checkbox = document.getElementById('Republican');
   var checkbox2 = document.getElementById('Democrat');
   var checkbox3= document.getElementById('Independent');
   checkbox.addEventListener("change", validaCheckbox, false);
   checkbox2.addEventListener("change", validaCheckbox2, false);
   checkbox3.addEventListener("change", validaCheckbox3, false);
   function Persona(id,nombre,url,party,state,seniority,votes_with_party_pct){
      this.idPersona = id;
      this.nombre = nombre;
      this.url = url;
      this.party = party;
      this.state = state;
      this.seniority = seniority;
      this.votes_with_party_pct = votes_with_party_pct;
   }
   function validarPersona(id){
     var bandera = false;
     var i = 0;
     while (i < arraytotal.length){
       if(arraytotal[i].idPersona == id){
         bandera = true;
       }
       i= i+1;
     }
     return bandera;
   }
   function mostrartablaFiltro(filtro,filtro2){
     x = document.getElementById("estado").value;
     if(x =='all'){
       for(var i = 0 ; i< arraytotal.length;i++){
          if(arraytotal[i].party === filtro || arraytotal[i].party === filtro2 ){
              $("#Table").append('<tr>'+
             '<td>'+'<a href='+arraytotal[i].url+'>' +arraytotal[i].nombre+'</a>'+'</td>'+
              '<td>'+arraytotal[i].party+'</td>'+
              '<td>'+arraytotal[i].state+'</td>'+
              '<td>'+arraytotal[i].seniority+'</td>'+
              '<td>'+arraytotal[i].votes_with_party_pct+
              '</td>'+'</tr>');
            }
          }
     }
     else{
     for(var i = 0 ; i< arraytotal.length;i++){
        if( (arraytotal[i].party === filtro || arraytotal[i].party === filtro2) && arraytotal[i].state == x ){
            $("#Table").append('<tr>'+
           '<td>'+'<a href='+arraytotal[i].url+'>' +arraytotal[i].nombre+'</a>'+'</td>'+
            '<td>'+arraytotal[i].party+'</td>'+
            '<td>'+arraytotal[i].state+'</td>'+
            '<td>'+arraytotal[i].seniority+'</td>'+
            '<td>'+arraytotal[i].votes_with_party_pct+
            '</td>'+'</tr>');
          }
        }
      }
   }

   function mostrarTabla(filtro){
     x = document.getElementById("estado").value;

     if(x == 'all'){
       for(var i = 0 ; i< arraytotal.length;i++){
          if(arraytotal[i].party ==filtro ){
              $("#Table").append('<tr>'+
             '<td>'+'<a href='+arraytotal[i].url+'>' +arraytotal[i].nombre+'</a>'+'</td>'+
              '<td>'+arraytotal[i].party+'</td>'+
              '<td>'+arraytotal[i].state+'</td>'+
              '<td>'+arraytotal[i].seniority+'</td>'+
              '<td>'+arraytotal[i].votes_with_party_pct+
              '</td>'+'</tr>');
            }
          }
     }
     else{
     for(var i = 0 ; i< arraytotal.length;i++){
        if(arraytotal[i].party ==filtro && arraytotal[i].state == x ){
            $("#Table").append('<tr>'+
           '<td>'+'<a href='+arraytotal[i].url+'>' +arraytotal[i].nombre+'</a>'+'</td>'+
            '<td>'+arraytotal[i].party+'</td>'+
            '<td>'+arraytotal[i].state+'</td>'+
            '<td>'+arraytotal[i].seniority+'</td>'+
            '<td>'+arraytotal[i].votes_with_party_pct+
            '</td>'+'</tr>');
          }
        }
      }
   }
   function cargarDatosEnObjeto(result){

    for(var i = 0 ; i< objectHouse.length; i++){
         if(objectHouse[i].party === result){
           var p = new Persona();
           if(objectHouse[i].middle_name != null){
               p.nombre =objectHouse[i].last_name+ " "+objectHouse[i].middle_name+" "+objectHouse[i].first_name;
           }
           else{
               p.nombre =objectHouse[i].last_name+ " "+objectHouse[i].first_name;
           }
          p.idPersona = objectHouse[i].id;
          p.url = objectHouse[i].url;
          p.party = objectHouse[i].party;
          p.state = objectHouse[i].state;
          p.seniority = objectHouse[i].seniority;
          p.votes_with_party_pct = objectHouse[i].votes_with_party_pct;
          if(validarPersona( objectHouse[i].id) == false){
              arraytotal.push(p);
          }
       }
     }
   }

   function titulo(){
  $("#Table").append('<tr><th>Name</th>'+
  '<th>Party</th>'+'<th>State</th>'+'<th>Years in Office</th>'+'<th>% votes w/ parte</th></tr>');
  }

  function DatosTablaArrayTotal(){
    x = document.getElementById("estado").value;
    if(x == 'all'){
      for(var i = 0 ; i< arraytotal.length;i++){
     $("#Table").append('<tr>'+
    '<td>'+'<a href='+arraytotal[i].url+'>' +arraytotal[i].nombre+'</a>'+'</td>'+
     '<td>'+arraytotal[i].party+'</td>'+
     '<td>'+arraytotal[i].state+'</td>'+
     '<td>'+arraytotal[i].seniority+'</td>'+
     '<td>'+arraytotal[i].votes_with_party_pct+
     '</td>'+'</tr>');
   }
    }
    else{
     for(var i = 0 ; i< arraytotal.length;i++){
       if(arraytotal[i].state == x){
        $("#Table").append('<tr>'+
       '<td>'+'<a href='+arraytotal[i].url+'>' +arraytotal[i].nombre+'</a>'+'</td>'+
        '<td>'+arraytotal[i].party+'</td>'+
        '<td>'+arraytotal[i].state+'</td>'+
        '<td>'+arraytotal[i].seniority+'</td>'+
        '<td>'+arraytotal[i].votes_with_party_pct+
        '</td>'+'</tr>');
      }
  }
  }
}

  function validaCheckbox(){
    $("#Table").empty();
    titulo();
    var result = document.getElementById('Republican').value;
    var result2 = document.getElementById('Democrat').value;
    var result3 = document.getElementById('Independent').value;
    var checked = checkbox.checked;

    if(checked){
      cargarDatosEnObjeto(result);
    if(checkbox2.checked == true && checkbox3.checked == true){
       cargarDatosEnObjeto(result2);
       cargarDatosEnObjeto(result3);
       DatosTablaArrayTotal();
     }
     else if(checkbox2.checked == true && checkbox3.checked == false){
        cargarDatosEnObjeto(result2);
        mostrartablaFiltro(result,result2);
     }
     else if(checkbox2.checked == false && checkbox3.checked == true){
        cargarDatosEnObjeto(result3);
        mostrartablaFiltro(result,result3);
     }
     else{
        mostrarTabla(result);
     }
   }
     else{
       if(checkbox2.checked == true && checkbox3.checked == true){
          cargarDatosEnObjeto(result2);
          cargarDatosEnObjeto(result3);
          mostrartablaFiltro(result2,result3);
       }
       else if (checkbox2.checked == false && checkbox3.checked == true) {
         cargarDatosEnObjeto(result3);
         mostrarTabla(result3);
       }
       else if (checkbox2.checked == true && checkbox3.checked == false) {
         cargarDatosEnObjeto(result2);
         mostrarTabla(result2);
     }
      else{
   //    mostrarTablaCompleta();
     }
  }
}

    function validaCheckbox2(){
      $("#Table").empty();
      titulo();
      var checked = checkbox2.checked;
      var result = document.getElementById('Democrat').value;
      var result2 = document.getElementById('Republican').value;
      var result3 = document.getElementById('Independent').value;
      var objetoDemocrat = cargarDatosEnObjeto(result);
      if(checked){
        cargarDatosEnObjeto(result);
      if(checkbox.checked == true && checkbox3.checked == true){
         cargarDatosEnObjeto(result2);
         cargarDatosEnObjeto(result3);
         DatosTablaArrayTotal();
       }
       else if(checkbox.checked == true && checkbox3.checked == false){
          cargarDatosEnObjeto(result2);
          mostrartablaFiltro(result,result2);
       }
       else if(checkbox.checked == false && checkbox3.checked == true){
          cargarDatosEnObjeto(result3);
          mostrartablaFiltro(result,result3);
       }
       else{
         mostrarTabla(result);
       }
     }
       else{
         if(checkbox.checked == true && checkbox3.checked == true){
        //    cargarDatosEnObjeto(result2);
        //    cargarDatosEnObjeto(result3);
            mostrartablaFiltro(result2,result3);
         }
         else if (checkbox.checked == false && checkbox3.checked == true) {
           cargarDatosEnObjeto(result3);
           mostrarTabla(result3);
         }
         else if (checkbox.checked == true && checkbox3.checked == false) {
           cargarDatosEnObjeto(result2);
           mostrarTabla(result2);
       }
       else{
       //   mostrarTablaCompleta();
       }
  }
}

    function validaCheckbox3(){
      // borra la tabla
      $("#Table").empty();
      //
      titulo();
      var checked = checkbox3.checked;
      var result = document.getElementById('Independent').value;
      var result3 = document.getElementById('Democrat').value;
      var result2 = document.getElementById('Republican').value;
      if(checked){
        cargarDatosEnObjeto(result);


      if(checkbox2.checked == true && checkbox.checked == true){
         DatosTablaArrayTotal();
       }
       else if(checkbox2.checked == true && checkbox.checked == false){
          cargarDatosEnObjeto(result3);
          mostrartablaFiltro(result,result3);
       }
       else if(checkbox2.checked == false && checkbox.checked == true){
          cargarDatosEnObjeto(result2);
          mostrartablaFiltro(result,result2);
       }
       else{
         mostrarTabla(result);
       }
     }
       else{
         if(checkbox2.checked == true && checkbox.checked == true){
            cargarDatosEnObjeto(result2);
            cargarDatosEnObjeto(result3);
            mostrartablaFiltro(result2,result3);
         }

         else if (checkbox2.checked == false && checkbox.checked == true) {
           cargarDatosEnObjeto(result2);
           mostrarTabla(result2);
         }
         else if (checkbox2.checked == true && checkbox.checked == false) {
           cargarDatosEnObjeto(result3);
           mostrarTabla(result3);
       }
       else{
         //mostrarTablaCompleta();
       }
    }
  }

     function mostrarTablaCompleta(){
      $("#Table").empty();
      titulo();
      for(var i = 0 ; i< objectHouse.length;i++){
         if(objectHouse[i].middle_name != null){
             nombreCompleto =objectHouse[i].last_name+ " "+objectHouse[i].middle_name+" "+objectHouse[i].first_name
         }
         else{
             nombreCompleto =objectHouse[i].last_name+ " "+objectHouse[i].first_name
         }
       $("#Table").append('<tr>'+
       '<td>'+'<a href='+objectHouse[i].url+'>' +nombreCompleto+'</a>'+'</td>'+
       '<td>'+objectHouse[i].party+'</td>'+
       '<td>'+objectHouse[i].state+'</td>'+
       '<td>'+objectHouse[i].seniority+'</td>'+
       '<td>'+objectHouse[i].votes_with_party_pct+
       '</td>'+'</tr>');
     }

   }


    function mouseOver() {
      document.getElementById("n").style.backgroundColor = "#E1E1E1";
    }

    function mouseOut() {
      document.getElementById("n").style.backgroundColor = "#FFFFFF";
    }
    function mouseOver2() {
    document.getElementById("b").style.backgroundColor = "#E1E1E1";
    }
    function mouseOut2() {
      document.getElementById("b").style.backgroundColor = "#FFFFFF";
    }
    function filterState(){
     validaCheckbox();
     validaCheckbox2();
     validaCheckbox3();
   }
