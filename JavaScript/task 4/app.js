/**
 * @Date:   2019-04-28T16:03:36-03:00
 * @Last modified time: 2019-04-30T17:53:29-03:00
 */
 var app = new Vue({
  el: '#app',
  data: function() {
    return {
    senateData:[],
  }
},
methods: {
  getFech: function() {
    fetch(url,{
    method:'GET',
    headers: new Headers({
    'X-API-Key': pw
    })}).then(response => response.json())
    .then(data =>{
      let algo = data.results;
      this.senateData = algo[0].members;
      bandera = true;
      console.log(app.senateData);

    })
    .catch(err => console.log(err))
  }
},
  created(){
    this.getFech();
  },

 });
