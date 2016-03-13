'use strict';

import moment from 'moment';
import structures from '../json/structures.json';

export class PokerClock {
  constructor() {
	
  	this.now = moment();

    this.currentRound = 0;

    this.structure = structures.default;

    this.paused = true;
    
  }

  show() {
    console.log(this.structure.name);
    console.log(this.now.format());
  }

  setStructure(structure){
    this.structure = structure;
  }

  loadRound(roundNumber){
    //this.structure =
  }

  togglePause(){
    this.paused = !this.paused;
  }


}

export default PokerClock;
