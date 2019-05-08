/**
 * @Date:   2019-04-28T16:03:36-03:00
 * @Last modified time: 2019-04-30T17:53:29-03:00
 */
var app = new Vue({
  el: '#app1',
  data: {
    senateData: [],
    url: "",
    pw: "W0e4QOiJNvMVHrhETcK3K9BLyMDSeQ2nDfLK0tgr",
    filter1: [],
    filter2: [],
    select:"",
    pathname:window.location.pathname,
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
      
       if(this.pathname.includes('/senate.html')){
         this.url="https://api.propublica.org/congress/v1/115/senate/members.json";
        
        }
       else if(this.pathname.includes('/house.html')){
         this.url = "https://api.propublica.org/congress/v1/115/house/members.json";
     }

    },
  },
    computed: {
    mostrarTabla: function() {
       if(this.select != "all"){ 
       return this.filter2 = this.senateData.filter ((dato) => (dato.party == this.filter1[0] || 
       dato.party == this.filter1[1] ||  dato.party == this.filter1[2]) && dato.state == this.select );
       }
       else{
        return this.filter2 = this.senateData.filter ((dato) => (dato.party == this.filter1[0] || 
          dato.party == this.filter1[1] ||  dato.party == this.filter1[2]) );
       }
   }
  },

    created() {
      this.cargaPag();
      this.getFech();
    },

  });
