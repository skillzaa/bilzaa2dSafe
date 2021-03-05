
export default class Bilzaa2d {

    constructor() {
        this.startTime = false; //wil only be null before first run 
     
    }
    
    start(){
 
    const d = new Date();
    this.startTime = d.getTime();
  return this.startTime;
    }//
stop(){return 50;}
    //////////////////////////classsss-----------------
    }