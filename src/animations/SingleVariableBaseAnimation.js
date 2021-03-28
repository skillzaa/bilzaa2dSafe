import Algorithms from "../algo/Algorithms.js";
export default class SingleVariableBaseAnimation {
    constructor(compulsary, dataRequired = [], argsForAlgo = {}) {
        //--------------------ALGO FASADE---------------      
        this.algorithms = new Algorithms();
        //--------------------COMPULSARY ITEMS---------------    
        this.attribute = compulsary.attribute;
        this.fromSecond = compulsary.fromSecond; //must for every animation
        this.toSecond = compulsary.toSecond; //must for every animation
        this.algo = this.algorithms.getAlgo(compulsary.algo);
        //-----------------------------------
        this.dataRequired = dataRequired;
        this.argsForAlgo = argsForAlgo;
        //-----------------------------------
        this.fps = 60; /// this has to be settled
    }
    animate(animationData, currentSecond) {
        const ret = this.algo(animationData, currentSecond);
        return ret;
    }
}
