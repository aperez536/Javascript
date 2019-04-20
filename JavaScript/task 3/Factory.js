function stadistics(){
  this.crearEstadistica = function(type){
    if(type === 'HouseAtAGlance'){
        return new HouseAtAGlance();
    }
    else if(type === 'LeastEngaged'){
      return new LeastEngaged();
    }
    else if(type ==='MostEngaged'){}
    return new MostEngaged();
  }
}
class HouseAtAGlance {
  constructor() {
    this.nres = 0;
    this.votedwParty = 0;
    }
     getNreps(){
      return this.nres;
    }
    getVotedwParty(){
      return this.votedwParty;
    }
    setNreps(nres){
      this.nres = nres;
    }
    setVotedwParty(votedwParty){
      this.votedwParty = votedwParty;
    }

  }

class LeastEngaged {
  constructor() {
    this.name = '';
    this.nmvotes = 0;
    this.missed = 0;
  }
  getName(){
    return this.name;
  }
  getNmvotes(){
    return this.nmvotes;
  }
  getMissed(){
    return this.missed;
  }
  setName(name){
    this.name = name;
  }
  setNmvotes(nmvotes){
    this.nmvotes = nmvotes;
  }
  setMissed(missed){
    this.missed = missed;
  }
}

class MostEngaged {
  constructor() {
    this.name = '';
    this.nmvotes = 0;
    this.missed = 0;
    this.url = '';
  }
  getName(){
    return this.name;
  }
  getNmvotes(){
    return this.nmvotes;
  }
  getMissed(){
    return this.missed;
  }
  setName(name){
    this.name = name;
  }
  setNmvotes(nmvotes){
    this.nmvotes = nmvotes;
  }
  setMissed(missed){
    this.missed = missed;
  }
  setUrl(url){
    this.url = url;
  }
  getUrl(){
    return this.url;
  }
}
