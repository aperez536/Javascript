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
