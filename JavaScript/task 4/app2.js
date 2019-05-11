/**
 * @Date:   2019-04-28T16:03:36-03:00
 * @Last modified time: 2019-05-10T22:38:29-03:00
 */
var app2 = new Vue({
  el: '#app2',
  data: {
    senateData: [],
    url: "",
    pw: "W0e4QOiJNvMVHrhETcK3K9BLyMDSeQ2nDfLK0tgr",
    text:"",
    rep:new stadistics().crearEstadistica('HouseAtAGlance'),
    dem:new stadistics().crearEstadistica('HouseAtAGlance'),
    inden:new stadistics().crearEstadistica('HouseAtAGlance'),
    lEngagedLeast:[],
    lEngagedMost: [],
    pathname:window.location.pathname,
    mostrar:new Array(8),
  },
  methods: {
    getFech: function () {
      fetch(this.url, {
        headers: new Headers({
          'X-API-Key': this.pw
        })
      }).then(response => response.json())
        .then(data => {
          this.senateData = data.results[0].members;
          //this.mostrarEstadistica();
          this.procedimientosDeCalculo();
          //localStorage.setItem("Datos", JSON.stringify(this.senateData));
        })
        .catch(err => console.log(err))
    },
    cargaPag: function(){
      if(this.pathname.includes('attendance-senate.html')){
        console.log("aca toy 1");
        this.url="https://api.propublica.org/congress/v1/115/senate/members.json";
       }
      else if(this.pathname.includes('attendance-house.html')){
        console.log("aca toy 2");
        this.url = "https://api.propublica.org/congress/v1/115/house/members.json";

    }
    },
     NaN2Zero:function(n) {
       return isNaN( n ) ? 0 : n;
   },
    mostrarEstadistica:function(){

      //baseDeDatos = JSON.parse(localStorage.getItem("Datos"));
      var totalsuma;
      var totalcantidad;
      for(var i = 0;i <   this.senateData.length; i++){
        if( this.senateData[i].party == 'R' ){
          if( this.senateData[i].votes_with_party_pct != undefined){
          this.rep.setVotedwParty(this.rep.getVotedwParty() +  this.senateData[i].votes_with_party_pct);
          this.rep.setNreps(this.rep.getNreps() + 1);
        }
        }
        if( this.senateData[i].party =='D'){
          if( this.senateData[i].votes_with_party_pct != undefined){
          this.dem.setVotedwParty(  this.dem.getVotedwParty() +  this.senateData[i].votes_with_party_pct);
          this.dem.setNreps(  this.dem.getNreps() + 1);
        }
        }
        if( this.senateData[i].party == 'I'){
          if( this.senateData[i].votes_with_party_pct != undefined){
          this.inden.setVotedwParty(this.inden.getVotedwParty() +  this.senateData[i].votes_with_party_pct);
          this.inden.setNreps(this.inden.getNreps() + 1);
       }
        }
      }
        totalsuma = this.rep.getVotedwParty()+ this.dem.getVotedwParty() +   this.inden.getVotedwParty();
        this.dem.setVotedwParty(   this.dem.getVotedwParty() /   this.dem.getNreps());
        this.rep.setVotedwParty(  this.rep.getVotedwParty()/  this.rep.getNreps());
        this.inden.setVotedwParty(this.inden.getVotedwParty()/this.inden.getNreps());
        this.dem.setVotedwParty(this.NaN2Zero(  this.dem.getVotedwParty())) ;
        this.rep.setVotedwParty(this.NaN2Zero(this.rep.getVotedwParty())) ;
        this.inden.setVotedwParty(this.NaN2Zero(this.inden.getVotedwParty())) ;
        totalsuma = ( (this.dem.getVotedwParty() + this.rep.getVotedwParty() + this.inden.getVotedwParty() )/3);
        totalcantidad = this.rep.getNreps() + this.dem.getNreps() + this.inden.getNreps();

        this.mostrar[0] =  this.dem.getNreps();
        this.mostrar[1] =  this.dem.getVotedwParty();
        this.mostrar[2] = this.rep.getNreps();
        this.mostrar[3] = this.rep.getVotedwParty();
        this.mostrar[4] = this.inden.getNreps();
        this.mostrar[5] = this.inden.getVotedwParty();
        this.mostrar[6] = totalcantidad;
        this.mostrar[7] = totalsuma;
        for(var i = 0; i< this.mostrar.length; i++){
          console.log("i es "+i  +"  "+this.mostrar[i]);
        }
      },
      mostrarEngaged: function(totalLeast,comparaNumero){
        console.log("aca toy");
        for(var i = 0 ; i< totalLeast.length;i++){
          var lEngaged =  new stadistics().crearEstadistica('leastEngage');
          lEngaged.setName(totalLeast[i].nombre);
          lEngaged.setNmvotes (totalLeast[i].missed_votes);
          lEngaged.setMissed(totalLeast[i].missed_votes_pct);
          lEngaged.setUrl(totalLeast[i].url);
          if(totalLeast[i].missed_votes_pct <= comparaNumero){
            this.lEngagedLeast.push(lEngaged)
          }
          else{
            this.lEngagedMost.push(lEngaged)

         }
        }
        console.log(this.lEngagedLeast);
        console.log(this.lEngagedMost);
      },
      procedimientosDeCalculo: function(){
        console.log("entre aca");
        var comparaNumero;
        var totalLeast = [];
        var total;
        var aux;
        var i=0;
        //Calculo del percentil
        while(Number.isInteger(total) == false){
          total = ((this.senateData.length + i )* 10)/100 ;
          i++;
          }
              for(i = 0 ; i< this.senateData.length; i++){
                var objecto = new Object();
                 if(this.senateData[i].middle_name != null){
                     objecto.nombre =this.senateData[i].last_name+ " "+this.senateData[i].middle_name+" "+this.senateData[i].first_name;
                 }
                 else{
                     objecto.nombre =this.senateData[i].last_name+ " "+this.senateData[i].first_name;
                 }
                objecto.url = this.senateData[i].url;
                objecto.missed_votes_pct = this.senateData[i].missed_votes_pct;
                objecto.missed_votes = this.senateData[i].missed_votes;
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
            console.log(totalLeast.length);
            this.mostrarEngaged(totalLeast,comparaNumero);
      }
  },
    computed: {
  },

    created() {
      this.cargaPag();
      this.getFech();
    },

  });
