export default class Algorithm {
    constructor(valueName, argsForAlgo = {}) {
        this.argsForAlgo = argsForAlgo;
        this.fps = 60; //???????????????????????????????   
        this.valueName = valueName;
        //this.execute(argsForAlgo,currentSecond); 
    }
    execute(animationData, currentSecond) { }
}
