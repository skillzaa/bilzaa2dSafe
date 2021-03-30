import Algorithms from "../algo/Algorithms.js";
export default class SingleVariableBaseAnimation {
    constructor(basicAnimationData, readOnlyElementData = [], argsForAlgo = {}) {
        //--------------------ALGO FASADE---------------      
        this.algorithms = new Algorithms();
        //--------------------basic ITEMS---------------    
        this.basicAnimationData = basicAnimationData;
        // this is set at creation time---
        //  this.attributeToAnimate = basic.attributeToAnimate ;
        //  this.fromSecond = basic.fromSecond  ; //must for every animation
        //  this.toSecond = basic.toSecond ;//must for every animation
        this.algo = this.algorithms.getAlgo(this.basicAnimationData.algo);
        //-----------------------------------
        this.readOnlyElementData = readOnlyElementData;
        this.argsForAlgo = argsForAlgo;
        //-----------------------------------
        this.fps = 60; /// this has to be settled
        //--------------------------------------------
        //this.lastExecutionTime;
    }
    // the attributeToAnimate and readOnlyElementData in the constructor are just the names of the attributes but here we are getting the attrribute array of objects for each from the primtive with latest values.
    animate(attributeToAnimate, readOnlyElementData, currentSecond, additionalData = {}) {
        //this.argsForAlgo.lastExecutionTime = this.lastExecutionTime    
        const ret = this.algo(this.basicAnimationData, currentSecond, readOnlyElementData, this.argsForAlgo);
        //after running the animation reset the lastExecutionTime;
        //this.argsForAlgo.lastExecutionTime = Date.now()
        return ret;
    }
}
