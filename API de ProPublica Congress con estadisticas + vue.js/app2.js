/**
 * @Date:   2019-04-28T16:03:36-03:00
 * @Last modified time: 2019-05-24T17:40:35-03:00
 */
var app2 = new Vue({
  el: '#app2',
  template:'',
  data: {
    senateData: [],
    url: "",
    pw: "W0e4QOiJNvMVHrhETcK3K9BLyMDSeQ2nDfLK0tgr",
    text:"",
    tipo: [{
     Nombre: "Democrats",
     Cantidad: 0,
     votes_with_party_pct: 0
   },
   {
     Nombre: "Republicans",
     Cantidad: 0,
     votes_with_party_pct: 0
   },
   {
     Nombre: "Independents",
     Cantidad: 0,
     votes_with_party_pct: 0
   }],
    lEngagedLeast:[],
    lEngagedMost: [],
    lEngaged : [],
    loyalL: [],
    loyalM : [],
    pathname:window.location.pathname,
    mostrar:new Array(8),
  },
  methods: {
    getFech: function () {
      fetch(this.url, {
        method: 'GET',
        headers: new Headers({
          'X-API-Key': this.pw
        })
      }).then(response => response.json())
        .then(data => {
          this.senateData = data.results[0].members;
        })
        .catch(err => console.log(err))
    },
    cargaPag: function(){
      if(this.pathname.includes('attendance-senate.html')){

        this.url="https://api.propublica.org/congress/v1/113/senate/members.json";
       }
      else if(this.pathname.includes('attendance-house.html')){

        this.url = "https://api.propublica.org/congress/v1/113/house/members.json";

    }
    else if(this.pathname.includes('partyLoyaltyHouse.html')){

      this.url = "https://api.propublica.org/congress/v1/113/house/members.json";

  }
  else if(this.pathname.includes('partyLoyaltySenate.html')){
    this.url = "https://api.propublica.org/congress/v1/113/senate/members.json";

  }
    },
    NaN2Zero:function(n) {
      return isNaN( n ) ? 0 : n;
  },

  },
    computed: {
     mostrarEstadistica:function(){
      var totalsuma;
       var totalcantidad;
       for(var i = 0;i <   this.senateData.length; i++){
         if( this.senateData[i].party == 'R' ){
           if( this.senateData[i].votes_with_party_pct != undefined){
             this.tipo[1].votes_with_party_pct+= this.senateData[i].votes_with_party_pct
             this.tipo[1].Cantidad+= 1;
         }
         }
         if( this.senateData[i].party =='D'){
           if( this.senateData[i].votes_with_party_pct != undefined){
             this.tipo[0].votes_with_party_pct+= this.senateData[i].votes_with_party_pct
             this.tipo[0].Cantidad+= 1;
         }
         }
         if( this.senateData[i].party == 'I'){
           if( this.senateData[i].votes_with_party_pct != undefined){
             this.tipo[2].votes_with_party_pct+= this.senateData[i].votes_with_party_pct
             this.tipo[2].Cantidad+= 1;
        }
         }
       }
         totalsuma = this.tipo[0].votes_with_party_pct+ this.tipo[1].votes_with_party_pct +   this.tipo[2].votes_with_party_pct
         this.tipo[0].votes_with_party_pct = this.tipo[0].votes_with_party_pct/  this.tipo[0].Cantidad
         this.tipo[1].votes_with_party_pct = this.tipo[1].votes_with_party_pct/  this.tipo[1].Cantidad
         this.tipo[2].votes_with_party_pct = this.tipo[2].votes_with_party_pct/  this.tipo[2].Cantidad
         this.tipo[0].votes_with_party_pct = this.NaN2Zero(  this.tipo[0].votes_with_party_pct )
         this.tipo[1].votes_with_party_pct = this.NaN2Zero(  this.tipo[1].votes_with_party_pct )
         this.tipo[2].votes_with_party_pct = this.NaN2Zero(  this.tipo[2].votes_with_party_pct )
         totalsuma = ( ( this.tipo[0].votes_with_party_pct +  this.tipo[1].votes_with_party_pct +  this.tipo[2].votes_with_party_pct )/3)
	 if( this.tipo[0].votes_with_party_pct == 0 ||  this.tipo[1].votes_with_party_pct == 0 ||  this.tipo[2].votes_with_party_pct==0)
	 {
	   totalsuma=  ( this.tipo[0].votes_with_party_pct +  this.tipo[1].votes_with_party_pct +  this.tipo[2].votes_with_party_pct )/2;
	 }
         totalcantidad = this.tipo[0].Cantidad + this.tipo[1].Cantidad + this.tipo[2].Cantidad

         this.mostrar[0] = this.tipo[0].Cantidad;
         this.mostrar[1] = this.tipo[0].votes_with_party_pct.toFixed(2)
         this.mostrar[2] = this.tipo[1].Cantidad;
         this.mostrar[3] = this.tipo[1].votes_with_party_pct.toFixed(2)
         this.mostrar[4] = this.tipo[2].Cantidad;
         this.mostrar[5] = this.tipo[2].votes_with_party_pct.toFixed(2)
         this.mostrar[6] = totalcantidad
         this.mostrar[7] = totalsuma.toFixed(2)
       },
       procedimientosDeCalculo: function(){
         var comparaNumero
         var comparaNumero2
         var compara3;
         var compara4;
         var total
         var nombre
         var i=0
         //Calculo del percentil
               for(i = 0 ; i< this.senateData.length; i++){
                  var obj = {};
                  if(this.senateData[i].votes_with_party_pct != undefined ||  this.senateData[i].missed_votes_pct !=undefined )
                  {
                  if(this.senateData[i].middle_name != null){
                      nombre =this.senateData[i].last_name+ " "+this.senateData[i].middle_name+" "+this.senateData[i].first_name
                  }
                  else{
                      nombre=this.senateData[i].last_name+ " "+this.senateData[i].first_name
                  }
                   obj["fullname"] = nombre
                   obj["party"] = this.senateData[i].party
                   obj["votes_with_party_pct"] = this.senateData[i].votes_with_party_pct
                   obj["missed_vote"] = this.senateData[i].missed_votes
                   obj["missed_votes_pct"] = this.senateData[i].missed_votes_pct
                   obj["url"] = this.senateData[i].url
                   obj["votes"]= this.senateData[i].total_votes
                   this.lEngaged.push(obj)
                }

            }

              //ordeno la lista con el porcentaje
              if(this.pathname.includes('attendance-senate.html') ||this.pathname.includes('attendance-house.html'))
              {

                console.log("estoy en el attendance");
              this.lEngaged.sort(function (a,b){
                return a.missed_votes_pct - b.missed_votes_pct;
              })

            }
            if(this.pathname.includes('partyLoyaltyHouse.html') || this.pathname.includes('partyLoyaltySenate.html')){
              console.log("estoy en el Loyalty");
              this.lEngaged.sort(function (a,b){
                return a.votes_with_party_pct - b.votes_with_party_pct;
              })


            }
            i = 0;
            while(Number.isInteger(total) == false){
              total = ((this.senateData.length + i ) * 10)/100;
              i++;
              }
            comparaNumero2 = this.lEngaged[total-1].votes_with_party_pct
            compara4 = this.lEngaged[this.lEngaged.length-total].votes_with_party_pct
            comparaNumero = this.lEngaged[total-1].missed_votes_pct
            compara3 = this.lEngaged[this.lEngaged.length-total].missed_votes_pct

            for( i = 0 ; i< this.lEngaged.length;i++){
             if(this.lEngaged[i].missed_votes_pct <= comparaNumero){
               this.lEngagedLeast.push(this.lEngaged[i])
             }
             else if(this.lEngaged[i].missed_votes_pct >= compara3) {
               this.lEngagedMost.push(this.lEngaged[i])
             }
             else{}
             if(this.lEngaged[i].votes_with_party_pct <= comparaNumero2){
                 this.loyalL.push(this.lEngaged[i])
               }
             else if(this.lEngaged[i].votes_with_party_pct >= compara4){

                 this.loyalM.push(this.lEngaged[i])
              }
              else{}
          }
    },
  },

    created() {
      this.cargaPag();
      this.getFech();
    },

  })
