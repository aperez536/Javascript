/**
 * @Date:   2019-04-28T16:03:36-03:00
 * @Last modified time: 2019-05-14T15:31:29-03:00
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

        this.url="https://api.propublica.org/congress/v1/115/senate/members.json";
       }
      else if(this.pathname.includes('attendance-house.html')){

        this.url = "https://api.propublica.org/congress/v1/115/house/members.json";

    }
    else if(this.pathname.includes('partyLoyaltyHouse.html')){

      this.url = "https://api.propublica.org/congress/v1/115/house/members.json";

  }
  else if(this.pathname.includes('partyLoyaltySenate.html')){
    this.url = "https://api.propublica.org/congress/v1/115/senate/members.json";

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
         console.log("entre aca");
         var comparaNumero
         var comparaNumero2
         var total
         var nombre
         var aux
         var i=0
         //Calculo del percentil
               for(i = 0 ; i< this.senateData.length; i++){
                  var obj = {};
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
              //ordeno la lista con el porcentaje
              if(this.pathname.includes('attendance-senate.html') ||this.pathname.includes('attendance-house.html'))
              {
                
                console.log("estoy en el attendance");
              for(i = 0 ; i < this.lEngaged.length ; i++){
                for(var j = 0; j < this.lEngaged.length -1 ; j++){
                  if(this.lEngaged[j].missed_votes_pct > this.lEngaged[j+1].missed_votes_pct){
                    aux = this.lEngaged[j];
                    this.lEngaged[j] =   this.lEngaged[j + 1];
                    this.lEngaged[j +1] = aux;
                  }
                }
              }

            }
            if(this.pathname.includes('partyLoyaltyHouse.html') || this.pathname.includes('partyLoyaltySenate.html')){
              console.log("estoy en el Loyalty");
              for(i = 0 ; i < this.lEngaged.length ; i++){
                for(var j = 0; j < this.lEngaged.length - 1   ; j++){
                  if(this.lEngaged[j].votes_with_party_pct > this.lEngaged[j+1].votes_with_party_pct){
                    aux = this.lEngaged[j];
                    this.lEngaged[j] =   this.lEngaged[j + 1];
                    this.lEngaged[j +1] = aux;
                  }
                }
              }


            }

            while(Number.isInteger(total) == false){
              total = ((this.senateData.length + i )* 10)/100
              i++;
              }
            comparaNumero2 = this.lEngaged[total].votes_with_party_pct
            comparaNumero = this.lEngaged[total].missed_votes_pct
            console.log(comparaNumero);
            console.log(comparaNumero2);
             for( i = 0 ; i< this.lEngaged.length;i++){
              if(this.lEngaged[i].missed_votes_pct <= comparaNumero){
                this.lEngagedLeast.push(this.lEngaged[i])
              }
              else{
                this.lEngagedMost.push(this.lEngaged[i])
              }
              if(this.lEngaged[i].votes_with_party_pct <= comparaNumero2){
                  this.loyalL.push(this.lEngaged[i])
                }
              else{

                  this.loyalM.push(this.lEngaged[i])
               }
           }
    },
  },

    created() {
      this.cargaPag();
      this.getFech();
    },

  })
